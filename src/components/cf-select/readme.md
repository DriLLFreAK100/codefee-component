# cf-select



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute     | Description | Type                          | Default     |
| ---------------- | ------------- | ----------- | ----------------------------- | ----------- |
| `placeholder`    | `placeholder` |             | `string`                      | `''`        |
| `virtualOptions` | --            |             | `HTMLCfSelectOptionElement[]` | `undefined` |


## Events

| Event            | Description | Type                                     |
| ---------------- | ----------- | ---------------------------------------- |
| `selectedChange` |             | `CustomEvent<HTMLCfSelectOptionElement>` |


## Dependencies

### Depends on

- [cf-virtual-scroller](../cf-virtual-scroller)
- [cf-typography](../cf-typography)

### Graph
```mermaid
graph TD;
  cf-select --> cf-virtual-scroller
  cf-select --> cf-typography
  style cf-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
