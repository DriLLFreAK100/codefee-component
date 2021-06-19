# cf-select



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type              | Default     |
| -------------- | --------------- | ----------- | ----------------- | ----------- |
| `isVirtualize` | `is-virtualize` |             | `boolean`         | `false`     |
| `options`      | --              |             | `ISelectOption[]` | `[]`        |
| `selected`     | --              |             | `ISelectOption`   | `undefined` |


## Events

| Event            | Description | Type                         |
| ---------------- | ----------- | ---------------------------- |
| `selectedChange` |             | `CustomEvent<ISelectOption>` |


## Dependencies

### Depends on

- [cf-typography](../cf-typography)

### Graph
```mermaid
graph TD;
  cf-select --> cf-typography
  style cf-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
