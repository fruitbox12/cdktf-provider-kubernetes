# `configMapV1Data` Submodule <a name="`configMapV1Data` Submodule" id="@cdktf/provider-kubernetes.configMapV1Data"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigMapV1Data <a name="ConfigMapV1Data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data kubernetes_config_map_v1_data}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1Data(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: typing.Mapping[str],
  metadata: ConfigMapV1DataMetadata,
  field_manager: str = None,
  force: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.data">data</a></code> | <code>typing.Mapping[str]</code> | The data we want to add to the ConfigMap. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.fieldManager">field_manager</a></code> | <code>str</code> | Set the name of the field manager for the specified labels. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force overwriting data that is managed outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#id ConfigMapV1Data#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.data"></a>

- *Type:* typing.Mapping[str]

The data we want to add to the ConfigMap.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#data ConfigMapV1Data#data}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#metadata ConfigMapV1Data#metadata}

---

##### `field_manager`<sup>Optional</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.fieldManager"></a>

- *Type:* str

Set the name of the field manager for the specified labels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#field_manager ConfigMapV1Data#field_manager}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.force"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force overwriting data that is managed outside of Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#force ConfigMapV1Data#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#id ConfigMapV1Data#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetFieldManager">reset_field_manager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata"></a>

```python
def put_metadata(
  name: str,
  namespace: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata.parameter.name"></a>

- *Type:* str

The name of the ConfigMap.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#name ConfigMapV1Data#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.putMetadata.parameter.namespace"></a>

- *Type:* str

The namespace of the ConfigMap.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#namespace ConfigMapV1Data#namespace}

---

##### `reset_field_manager` <a name="reset_field_manager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetFieldManager"></a>

```python
def reset_field_manager() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1Data.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1Data.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1Data.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference">ConfigMapV1DataMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dataInput">data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManagerInput">field_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forceInput">force_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.data">data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManager">field_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadata"></a>

```python
metadata: ConfigMapV1DataMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference">ConfigMapV1DataMetadataOutputReference</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.dataInput"></a>

```python
data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `field_manager_input`<sup>Optional</sup> <a name="field_manager_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManagerInput"></a>

```python
field_manager_input: str
```

- *Type:* str

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.forceInput"></a>

```python
force_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.metadataInput"></a>

```python
metadata_input: ConfigMapV1DataMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `field_manager`<sup>Required</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.fieldManager"></a>

```python
field_manager: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1Data.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigMapV1DataConfig <a name="ConfigMapV1DataConfig" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1DataConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: typing.Mapping[str],
  metadata: ConfigMapV1DataMetadata,
  field_manager: str = None,
  force: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.data">data</a></code> | <code>typing.Mapping[str]</code> | The data we want to add to the ConfigMap. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.fieldManager">field_manager</a></code> | <code>str</code> | Set the name of the field manager for the specified labels. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.force">force</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force overwriting data that is managed outside of Terraform. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#id ConfigMapV1Data#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The data we want to add to the ConfigMap.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#data ConfigMapV1Data#data}

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.metadata"></a>

```python
metadata: ConfigMapV1DataMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#metadata ConfigMapV1Data#metadata}

---

##### `field_manager`<sup>Optional</sup> <a name="field_manager" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.fieldManager"></a>

```python
field_manager: str
```

- *Type:* str

Set the name of the field manager for the specified labels.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#field_manager ConfigMapV1Data#field_manager}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.force"></a>

```python
force: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force overwriting data that is managed outside of Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#force ConfigMapV1Data#force}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#id ConfigMapV1Data#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ConfigMapV1DataMetadata <a name="ConfigMapV1DataMetadata" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1DataMetadata(
  name: str,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.name">name</a></code> | <code>str</code> | The name of the ConfigMap. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.namespace">namespace</a></code> | <code>str</code> | The namespace of the ConfigMap. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ConfigMap.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#name ConfigMapV1Data#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The namespace of the ConfigMap.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/config_map_v1_data#namespace ConfigMapV1Data#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigMapV1DataMetadataOutputReference <a name="ConfigMapV1DataMetadataOutputReference" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import config_map_v1_data

configMapV1Data.ConfigMapV1DataMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ConfigMapV1DataMetadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.configMapV1Data.ConfigMapV1DataMetadata">ConfigMapV1DataMetadata</a>

---


