# tern-jasminematchers
A Tern plugin adding [Jasmine-Matchers](https://github.com/JamieMason/Jasmine-Matchers) support.

[Npm package](https://www.npmjs.com/package/tern-jasminematchers)

![tern-jasminematchers screenshot](https://cloud.githubusercontent.com/assets/6804575/11194278/3bba3374-8cbc-11e5-8246-03cea0007b3d.png "tern-jasminematchers screenshot")

### Installation with [tern_for_vim](https://github.com/ternjs/tern_for_vim)
1. Go to your tern_for_vim directory
```
cd ~/.vim/bundle/tern_for_vim
```
2. Install tern-jasmine(if not installed)
```
npm install tern-jasmine@0.2.0
```
3. Install tern-jasminematchers
```
npm install tern-jasminematchers
```
4. Put
```
...
    "jasmine": {},
    "jasminematchers": {},
...
```
into your project's .tern-project file(to plugins section).
