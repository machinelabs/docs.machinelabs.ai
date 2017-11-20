---
title: REST API
type: guide
order: 8
---

MachineLabs comes with a REST API let's us fetch generated output like **trained models** from other labs, so we can build on top of those.

This API is a work in progress and we'll add more APIs very soon!

## Outputs

The Outputs API supports downloading generated outputs of labs.

### Fetching outputs of a lab

```
GET /executions/:execution/ouputs/:filename
```

#### Parameters

| Name        | Type | Description |
| ------------- |-------------|-----------|
| execution | string | Execution ID from which to fetch an output file from. |
| filename | string | Name of file to be fetched. |
