import { storage } from '../firebaseConfig';

export const uploadFileToFirebaseStorage = (iconFile, callback) => {
  const fileName = iconFile.name;
  const storageRef = storage.ref();
  const uploadTask = storageRef.child('/Resumes/' + fileName).put(iconFile);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      // progrss function ....
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      callback({ progress });
    },
    (error) => {
      // error function ....
      callback({ error });
    },
    (res) => {
      // complete function ....
      storageRef
        .child('/Resumes/' + fileName)
        .getDownloadURL()
        .then((url) => {
          callback({ url });
          // add url to the database if it is required
        });
    }
  );
};
