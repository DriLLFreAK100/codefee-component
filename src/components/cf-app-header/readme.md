# cf-app-header



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type         | Default     |
| ------------- | -------------- | ----------- | ------------ | ----------- |
| `appName`     | `app-name`     |             | `string`     | `undefined` |
| `drawerTitle` | `drawer-title` |             | `string`     | `undefined` |
| `navMenus`    | --             |             | `INavMenu[]` | `undefined` |


## Dependencies

### Depends on

- [cf-icon-button](../cf-icon-button)
- [cf-typography](../cf-typography)
- [cf-side-drawer](../cf-side-drawer)

### Graph
```mermaid
graph TD;
  cf-app-header --> cf-icon-button
  cf-app-header --> cf-typography
  cf-app-header --> cf-side-drawer
  cf-side-drawer --> cf-typography
  cf-side-drawer --> cf-icon-button
  cf-side-drawer --> cf-divider
  style cf-app-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
