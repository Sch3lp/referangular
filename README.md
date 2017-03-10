# Referangular

Run `npm install`.

Run `npm start` to compile the application and run the `lite-server`.

Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

## Icons

Steps I used to create similar icons:
* search icons online :-)
* crop icon and resize to 100x100
* enlarge canvas to 120x120 and recenter (for rounded avatars)
* go to http://manytools.org/image/colorize-filter/ and recolor using RGB 244 191 117

## TODO with the Team

* enums & dropdowns for fixed lists (contactgroep etc...)
* kantoorverantwoordelijke, dossierbeheerder, fondsadres en fondsverantwoordelijke uitwerken
* specifications page
* templating: er zit veel duplicatie tussen kantoor, dossierbeheerder, ...
  * doe je dat met child routes of bestaat er ook een templating manier?
* styling
  * create own theme (instead of overriding prebuilt theme colors)
* integrate backend
  * integrate with real backend in development mode
  * error handling
  * import module in intellij
  * bundle project and deploy together with backend
