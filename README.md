source:  https://netbasal.com/using-angular-components-with-third-party-libraries-522a1f33003

Thanks for the amazing article 😀.

# NGSweetAlert

> SweetAlert makes popup messages easy and pretty

One of the useful options that we can pass to the library is the content option, which is a DOM element that will be rendered inside the modal, for example:

```javascript
let slider = document.createElement("input");
slider.type = "range";

swal({
 content: slider
});
```

