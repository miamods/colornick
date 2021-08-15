# colornick

This script adds colors to usernames of your miarroba board. You can create groups of users that share the same styles. 

## Usage

Download [this script](colornick.min.js), upload it to the web space of your board, and insert the following code in the html footer (control panel > appearance > HTML): 

```html
<script type="text/javascript" src="/path/to/colornick.min.js"></script>
<script type="text/javascript">
colornick([
    {
        name: "Group 1",
        color: "#FF0000",
        bold: true,
        italic: false,
        users: ["Username1", "Username2" /*, more usernames...*/]},
    {
        name: "Group 2",
        color: "#00FF00",
        bold: true,
        italic: false,
        users: ["Username3", "Username4"/*, more usernames...*/
    }
    /*, more groups...*/
]);
</script>
```

The `colornick` function takes a list of groups, where each group is an object with the following properties:

* `name`: the name of the group,
* `color`: the color of usernames,
* `bold`: a flag to make usernames bold,
* `italic`: a flag to italicize usernames,
* `users`: a list of usernames belonging to the group.

## License

This script is released under the terms of the [BSD 3-Clause License](LICENSE).