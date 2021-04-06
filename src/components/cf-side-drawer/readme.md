# cf-side-drawer



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type                | Default  |
| ------------- | -------------- | ----------- | ------------------- | -------- |
| `drawerTitle` | `drawer-title` |             | `string`            | `'Menu'` |
| `position`    | `position`     |             | `"left" \| "right"` | `'left'` |
| `visible`     | `visible`      |             | `boolean`           | `false`  |


## Events

| Event   | Description | Type                      |
| ------- | ----------- | ------------------------- |
| `close` |             | `CustomEvent<MouseEvent>` |


## Dependencies

### Used by

 - [cf-app-header](../cf-app-header)
 - [cf-app-header-action-menu](../cf-app-header/cf-app-header-action-menu)

### Depends on

- [cf-typography](../cf-typography)
- [cf-divider](../cf-divider)

### Graph
```mermaid
graph TD;
  cf-side-drawer --> cf-typography
  cf-side-drawer --> cf-divider
  cf-app-header --> cf-side-drawer
  cf-app-header-action-menu --> cf-side-drawer
  style cf-side-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
