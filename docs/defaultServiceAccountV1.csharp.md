# `defaultServiceAccountV1` Submodule <a name="`defaultServiceAccountV1` Submodule" id="@cdktf/provider-kubernetes.defaultServiceAccountV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultServiceAccountV1 <a name="DefaultServiceAccountV1" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1 kubernetes_default_service_account_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1(Construct Scope, string Id, DefaultServiceAccountV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config">DefaultServiceAccountV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config">DefaultServiceAccountV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret">PutImagePullSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetAutomountServiceAccountToken">ResetAutomountServiceAccountToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetImagePullSecret">ResetImagePullSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutImagePullSecret` <a name="PutImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret"></a>

```csharp
private void PutImagePullSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret.parameter.value"></a>

- *Type:* object

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata"></a>

```csharp
private void PutMetadata(DefaultServiceAccountV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret"></a>

```csharp
private void PutSecret(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts"></a>

```csharp
private void PutTimeouts(DefaultServiceAccountV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

---

##### `ResetAutomountServiceAccountToken` <a name="ResetAutomountServiceAccountToken" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetAutomountServiceAccountToken"></a>

```csharp
private void ResetAutomountServiceAccountToken()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImagePullSecret` <a name="ResetImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetImagePullSecret"></a>

```csharp
private void ResetImagePullSecret()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DefaultServiceAccountV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DefaultServiceAccountV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DefaultServiceAccountV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.defaultSecretName">DefaultSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecret">ImagePullSecret</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList">DefaultServiceAccountV1ImagePullSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference">DefaultServiceAccountV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList">DefaultServiceAccountV1SecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference">DefaultServiceAccountV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountTokenInput">AutomountServiceAccountTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecretInput">ImagePullSecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secretInput">SecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountToken">AutomountServiceAccountToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultSecretName`<sup>Required</sup> <a name="DefaultSecretName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.defaultSecretName"></a>

```csharp
public string DefaultSecretName { get; }
```

- *Type:* string

---

##### `ImagePullSecret`<sup>Required</sup> <a name="ImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecret"></a>

```csharp
public DefaultServiceAccountV1ImagePullSecretList ImagePullSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList">DefaultServiceAccountV1ImagePullSecretList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadata"></a>

```csharp
public DefaultServiceAccountV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference">DefaultServiceAccountV1MetadataOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secret"></a>

```csharp
public DefaultServiceAccountV1SecretList Secret { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList">DefaultServiceAccountV1SecretList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeouts"></a>

```csharp
public DefaultServiceAccountV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference">DefaultServiceAccountV1TimeoutsOutputReference</a>

---

##### `AutomountServiceAccountTokenInput`<sup>Optional</sup> <a name="AutomountServiceAccountTokenInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountTokenInput"></a>

```csharp
public object AutomountServiceAccountTokenInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImagePullSecretInput`<sup>Optional</sup> <a name="ImagePullSecretInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecretInput"></a>

```csharp
public object ImagePullSecretInput { get; }
```

- *Type:* object

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadataInput"></a>

```csharp
public DefaultServiceAccountV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secretInput"></a>

```csharp
public object SecretInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutomountServiceAccountToken`<sup>Required</sup> <a name="AutomountServiceAccountToken" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountToken"></a>

```csharp
public object AutomountServiceAccountToken { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultServiceAccountV1Config <a name="DefaultServiceAccountV1Config" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DefaultServiceAccountV1Metadata Metadata,
    object AutomountServiceAccountToken = null,
    string Id = null,
    object ImagePullSecret = null,
    object Secret = null,
    DefaultServiceAccountV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.automountServiceAccountToken">AutomountServiceAccountToken</a></code> | <code>object</code> | Enable automatic mounting of the service account token. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#id DefaultServiceAccountV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.imagePullSecret">ImagePullSecret</a></code> | <code>object</code> | image_pull_secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.secret">Secret</a></code> | <code>object</code> | secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.metadata"></a>

```csharp
public DefaultServiceAccountV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#metadata DefaultServiceAccountV1#metadata}

---

##### `AutomountServiceAccountToken`<sup>Optional</sup> <a name="AutomountServiceAccountToken" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.automountServiceAccountToken"></a>

```csharp
public object AutomountServiceAccountToken { get; set; }
```

- *Type:* object

Enable automatic mounting of the service account token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#automount_service_account_token DefaultServiceAccountV1#automount_service_account_token}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#id DefaultServiceAccountV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImagePullSecret`<sup>Optional</sup> <a name="ImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.imagePullSecret"></a>

```csharp
public object ImagePullSecret { get; set; }
```

- *Type:* object

image_pull_secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#image_pull_secret DefaultServiceAccountV1#image_pull_secret}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.secret"></a>

```csharp
public object Secret { get; set; }
```

- *Type:* object

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#secret DefaultServiceAccountV1#secret}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.timeouts"></a>

```csharp
public DefaultServiceAccountV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#timeouts DefaultServiceAccountV1#timeouts}

---

### DefaultServiceAccountV1ImagePullSecret <a name="DefaultServiceAccountV1ImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1ImagePullSecret {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#name DefaultServiceAccountV1#name}

---

### DefaultServiceAccountV1Metadata <a name="DefaultServiceAccountV1Metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the service account that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service account. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the service account must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the service account that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#annotations DefaultServiceAccountV1#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the service account.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#labels DefaultServiceAccountV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service account, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#name DefaultServiceAccountV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the service account must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#namespace DefaultServiceAccountV1#namespace}

---

### DefaultServiceAccountV1Secret <a name="DefaultServiceAccountV1Secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1Secret {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.property.name">Name</a></code> | <code>string</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#name DefaultServiceAccountV1#name}

---

### DefaultServiceAccountV1Timeouts <a name="DefaultServiceAccountV1Timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1Timeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#create DefaultServiceAccountV1#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/default_service_account_v1#create DefaultServiceAccountV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultServiceAccountV1ImagePullSecretList <a name="DefaultServiceAccountV1ImagePullSecretList" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1ImagePullSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get"></a>

```csharp
private DefaultServiceAccountV1ImagePullSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultServiceAccountV1ImagePullSecretOutputReference <a name="DefaultServiceAccountV1ImagePullSecretOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1ImagePullSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultServiceAccountV1MetadataOutputReference <a name="DefaultServiceAccountV1MetadataOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.internalValue"></a>

```csharp
public DefaultServiceAccountV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---


### DefaultServiceAccountV1SecretList <a name="DefaultServiceAccountV1SecretList" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1SecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get"></a>

```csharp
private DefaultServiceAccountV1SecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultServiceAccountV1SecretOutputReference <a name="DefaultServiceAccountV1SecretOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1SecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DefaultServiceAccountV1TimeoutsOutputReference <a name="DefaultServiceAccountV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DefaultServiceAccountV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


