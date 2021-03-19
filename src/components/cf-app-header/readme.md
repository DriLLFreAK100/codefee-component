# cf-app-header



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type            | Default     |
| ------------- | -------------- | ----------- | --------------- | ----------- |
| `actionMenus` | --             |             | `IActionMenu[]` | `undefined` |
| `appName`     | `app-name`     |             | `string`        | `undefined` |
| `drawerTitle` | `drawer-title` |             | `string`        | `undefined` |
| `navMenus`    | --             |             | `INavMenu[]`    | `undefined` |


## Dependencies

### Depends on

- [cf-icon-button](../cf-icon-button)
- [cf-app-header-action-menu](cf-app-header-action-menu)
- [cf-typography](../cf-typography)
- [cf-side-drawer](../cf-side-drawer)
- [cf-app-header-menu](cf-app-header-menu)

### Graph
```mermaid
graph TD;
  cf-app-header --> cf-icon-button
  cf-app-header --> cf-app-header-action-menu
  cf-app-header --> cf-typography
  cf-app-header --> cf-side-drawer
  cf-app-header --> cf-app-header-menu
  cf-app-header-action-menu --> cf-icon-button
  cf-app-header-action-menu --> cf-side-drawer
  cf-side-drawer --> cf-typography
  cf-side-drawer --> cf-icon-button
  cf-side-drawer --> cf-divider
  cf-app-header-menu --> cf-link
  cf-link --> cf-typography
  style cf-app-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
