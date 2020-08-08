
1. Issue  with ESLint
    if you get error as Expected linebreaks to be 'LF' but found 'CRLF' after configuring eslint then use the following commands

    git config core.autocrlf false
    git rm --cached -r .
    git reset --hard
2. 


