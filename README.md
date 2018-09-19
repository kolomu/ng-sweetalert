source: https://netbasal.com/using-angular-components-with-third-party-libraries-522a1f33003

Thanks for the amazing article 😀.

# NGSweetAlert

> SweetAlert makes popup messages easy and pretty

```javascript
let slider = document.createElement("input");
slider.type = "range";

swal({
  content: slider
});
```

Usage in Angular Component

```typescript
// app.component.ts

swal({
  content: this.component.location.nativeElement
}).then(() => {
  this.component.destroy();
});
```
