# `serviceV1` Submodule <a name="`serviceV1` Submodule" id="@cdktf/provider-kubernetes.serviceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceV1 <a name="ServiceV1" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1 kubernetes_service_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1(Construct Scope, string Id, ServiceV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config">ServiceV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config">ServiceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer">ResetWaitForLoadBalancer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata"></a>

```csharp
private void PutMetadata(ServiceV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec"></a>

```csharp
private void PutSpec(ServiceV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWaitForLoadBalancer` <a name="ResetWaitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer"></a>

```csharp
private void ResetWaitForLoadBalancer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ServiceV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ServiceV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

ServiceV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status">Status</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput">WaitForLoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer">WaitForLoadBalancer</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata"></a>

```csharp
public ServiceV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec"></a>

```csharp
public ServiceV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status"></a>

```csharp
public ServiceV1StatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts"></a>

```csharp
public ServiceV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput"></a>

```csharp
public ServiceV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput"></a>

```csharp
public ServiceV1Spec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WaitForLoadBalancerInput`<sup>Optional</sup> <a name="WaitForLoadBalancerInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput"></a>

```csharp
public object WaitForLoadBalancerInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WaitForLoadBalancer`<sup>Required</sup> <a name="WaitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer"></a>

```csharp
public object WaitForLoadBalancer { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceV1Config <a name="ServiceV1Config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ServiceV1Metadata Metadata,
    ServiceV1Spec Spec,
    string Id = null,
    ServiceV1Timeouts Timeouts = null,
    object WaitForLoadBalancer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#id ServiceV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer">WaitForLoadBalancer</a></code> | <code>object</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata"></a>

```csharp
public ServiceV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#metadata ServiceV1#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec"></a>

```csharp
public ServiceV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#spec ServiceV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#id ServiceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts"></a>

```csharp
public ServiceV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#timeouts ServiceV1#timeouts}

---

##### `WaitForLoadBalancer`<sup>Optional</sup> <a name="WaitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer"></a>

```csharp
public object WaitForLoadBalancer { get; set; }
```

- *Type:* object

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#wait_for_load_balancer ServiceV1#wait_for_load_balancer}

---

### ServiceV1Metadata <a name="ServiceV1Metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the service, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#annotations ServiceV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#generate_name ServiceV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#labels ServiceV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#name ServiceV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#namespace ServiceV1#namespace}

---

### ServiceV1Spec <a name="ServiceV1Spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1Spec {
    object AllocateLoadBalancerNodePorts = null,
    string ClusterIp = null,
    string[] ClusterIps = null,
    string[] ExternalIps = null,
    string ExternalName = null,
    string ExternalTrafficPolicy = null,
    double HealthCheckNodePort = null,
    string InternalTrafficPolicy = null,
    string[] IpFamilies = null,
    string IpFamilyPolicy = null,
    string LoadBalancerClass = null,
    string LoadBalancerIp = null,
    string[] LoadBalancerSourceRanges = null,
    object Port = null,
    object PublishNotReadyAddresses = null,
    System.Collections.Generic.IDictionary<string, string> Selector = null,
    string SessionAffinity = null,
    ServiceV1SpecSessionAffinityConfig SessionAffinityConfig = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts">AllocateLoadBalancerNodePorts</a></code> | <code>object</code> | Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp">ClusterIp</a></code> | <code>string</code> | The IP address of the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps">ClusterIps</a></code> | <code>string[]</code> | List of IP addresses assigned to this service, and are usually assigned randomly. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps">ExternalIps</a></code> | <code>string[]</code> | A list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName">ExternalName</a></code> | <code>string</code> | The external reference that kubedns or equivalent will return as a CNAME record for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy">ExternalTrafficPolicy</a></code> | <code>string</code> | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort">HealthCheckNodePort</a></code> | <code>double</code> | Specifies the Healthcheck NodePort for the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy">InternalTrafficPolicy</a></code> | <code>string</code> | Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies">IpFamilies</a></code> | <code>string[]</code> | IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy">IpFamilyPolicy</a></code> | <code>string</code> | IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass">LoadBalancerClass</a></code> | <code>string</code> | The class of the load balancer implementation this Service belongs to. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp">LoadBalancerIp</a></code> | <code>string</code> | Only applies to `type = LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges">LoadBalancerSourceRanges</a></code> | <code>string[]</code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port">Port</a></code> | <code>object</code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses">PublishNotReadyAddresses</a></code> | <code>object</code> | When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector">Selector</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Route service traffic to pods with label keys and values matching this selector. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig">SessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | session_affinity_config block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type">Type</a></code> | <code>string</code> | Determines how the service is exposed. |

---

##### `AllocateLoadBalancerNodePorts`<sup>Optional</sup> <a name="AllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts"></a>

```csharp
public object AllocateLoadBalancerNodePorts { get; set; }
```

- *Type:* object

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#allocate_load_balancer_node_ports ServiceV1#allocate_load_balancer_node_ports}

---

##### `ClusterIp`<sup>Optional</sup> <a name="ClusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp"></a>

```csharp
public string ClusterIp { get; set; }
```

- *Type:* string

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#cluster_ip ServiceV1#cluster_ip}

---

##### `ClusterIps`<sup>Optional</sup> <a name="ClusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps"></a>

```csharp
public string[] ClusterIps { get; set; }
```

- *Type:* string[]

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#cluster_ips ServiceV1#cluster_ips}

---

##### `ExternalIps`<sup>Optional</sup> <a name="ExternalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps"></a>

```csharp
public string[] ExternalIps { get; set; }
```

- *Type:* string[]

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#external_ips ServiceV1#external_ips}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName"></a>

```csharp
public string ExternalName { get; set; }
```

- *Type:* string

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#external_name ServiceV1#external_name}

---

##### `ExternalTrafficPolicy`<sup>Optional</sup> <a name="ExternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy"></a>

```csharp
public string ExternalTrafficPolicy { get; set; }
```

- *Type:* string

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#external_traffic_policy ServiceV1#external_traffic_policy}

---

##### `HealthCheckNodePort`<sup>Optional</sup> <a name="HealthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort"></a>

```csharp
public double HealthCheckNodePort { get; set; }
```

- *Type:* double

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#health_check_node_port ServiceV1#health_check_node_port}

---

##### `InternalTrafficPolicy`<sup>Optional</sup> <a name="InternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy"></a>

```csharp
public string InternalTrafficPolicy { get; set; }
```

- *Type:* string

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#internal_traffic_policy ServiceV1#internal_traffic_policy}

---

##### `IpFamilies`<sup>Optional</sup> <a name="IpFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies"></a>

```csharp
public string[] IpFamilies { get; set; }
```

- *Type:* string[]

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#ip_families ServiceV1#ip_families}

---

##### `IpFamilyPolicy`<sup>Optional</sup> <a name="IpFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy"></a>

```csharp
public string IpFamilyPolicy { get; set; }
```

- *Type:* string

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#ip_family_policy ServiceV1#ip_family_policy}

---

##### `LoadBalancerClass`<sup>Optional</sup> <a name="LoadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass"></a>

```csharp
public string LoadBalancerClass { get; set; }
```

- *Type:* string

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#load_balancer_class ServiceV1#load_balancer_class}

---

##### `LoadBalancerIp`<sup>Optional</sup> <a name="LoadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp"></a>

```csharp
public string LoadBalancerIp { get; set; }
```

- *Type:* string

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#load_balancer_ip ServiceV1#load_balancer_ip}

---

##### `LoadBalancerSourceRanges`<sup>Optional</sup> <a name="LoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges"></a>

```csharp
public string[] LoadBalancerSourceRanges { get; set; }
```

- *Type:* string[]

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#load_balancer_source_ranges ServiceV1#load_balancer_source_ranges}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port"></a>

```csharp
public object Port { get; set; }
```

- *Type:* object

port block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#port ServiceV1#port}

---

##### `PublishNotReadyAddresses`<sup>Optional</sup> <a name="PublishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses"></a>

```csharp
public object PublishNotReadyAddresses { get; set; }
```

- *Type:* object

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#publish_not_ready_addresses ServiceV1#publish_not_ready_addresses}

---

##### `Selector`<sup>Optional</sup> <a name="Selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Selector { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: http://kubernetes.io/docs/user-guide/services#overview

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#selector ServiceV1#selector}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; set; }
```

- *Type:* string

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#session_affinity ServiceV1#session_affinity}

---

##### `SessionAffinityConfig`<sup>Optional</sup> <a name="SessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig"></a>

```csharp
public ServiceV1SpecSessionAffinityConfig SessionAffinityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#session_affinity_config ServiceV1#session_affinity_config}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: http://kubernetes.io/docs/user-guide/services#overview

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#type ServiceV1#type}

---

### ServiceV1SpecPort <a name="ServiceV1SpecPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecPort {
    double Port,
    string AppProtocol = null,
    string Name = null,
    double NodePort = null,
    string Protocol = null,
    string TargetPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port">Port</a></code> | <code>double</code> | The port that will be exposed by this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol">AppProtocol</a></code> | <code>string</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name">Name</a></code> | <code>string</code> | The name of this port within the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort">NodePort</a></code> | <code>double</code> | The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol">Protocol</a></code> | <code>string</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort">TargetPort</a></code> | <code>string</code> | Number or name of the port to access on the pods targeted by the service. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port that will be exposed by this service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#port ServiceV1#port}

---

##### `AppProtocol`<sup>Optional</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol"></a>

```csharp
public string AppProtocol { get; set; }
```

- *Type:* string

The application protocol for this port.

This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#app_protocol ServiceV1#app_protocol}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this port within the service.

All ports within the service must have unique names. Optional if only one ServicePort is defined on this service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#name ServiceV1#name}

---

##### `NodePort`<sup>Optional</sup> <a name="NodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort"></a>

```csharp
public double NodePort { get; set; }
```

- *Type:* double

The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`.

Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the `type` of this service requires one. More info: http://kubernetes.io/docs/user-guide/services#type--nodeport

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#node_port ServiceV1#node_port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#protocol ServiceV1#protocol}

---

##### `TargetPort`<sup>Optional</sup> <a name="TargetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort"></a>

```csharp
public string TargetPort { get; set; }
```

- *Type:* string

Number or name of the port to access on the pods targeted by the service.

Number must be in the range 1 to 65535. This field is ignored for services with `cluster_ip = "None"`. More info: http://kubernetes.io/docs/user-guide/services#defining-a-service

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#target_port ServiceV1#target_port}

---

### ServiceV1SpecSessionAffinityConfig <a name="ServiceV1SpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecSessionAffinityConfig {
    ServiceV1SpecSessionAffinityConfigClientIp ClientIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp">ClientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | client_ip block. |

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp"></a>

```csharp
public ServiceV1SpecSessionAffinityConfigClientIp ClientIp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#client_ip ServiceV1#client_ip}

---

### ServiceV1SpecSessionAffinityConfigClientIp <a name="ServiceV1SpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecSessionAffinityConfigClientIp {
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Specifies the seconds of `ClientIP` type session sticky time. |

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#timeout_seconds ServiceV1#timeout_seconds}

---

### ServiceV1Status <a name="ServiceV1Status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1Status {

};
```


### ServiceV1StatusLoadBalancer <a name="ServiceV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusLoadBalancer {

};
```


### ServiceV1StatusLoadBalancerIngress <a name="ServiceV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusLoadBalancerIngress {

};
```


### ServiceV1Timeouts <a name="ServiceV1Timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1Timeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#create ServiceV1#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/service_v1#create ServiceV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceV1MetadataOutputReference <a name="ServiceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue"></a>

```csharp
public ServiceV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---


### ServiceV1SpecOutputReference <a name="ServiceV1SpecOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort">PutPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig">PutSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts">ResetAllocateLoadBalancerNodePorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp">ResetClusterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps">ResetClusterIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps">ResetExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy">ResetExternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort">ResetHealthCheckNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy">ResetInternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies">ResetIpFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy">ResetIpFamilyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass">ResetLoadBalancerClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp">ResetLoadBalancerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges">ResetLoadBalancerSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses">ResetPublishNotReadyAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector">ResetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig">ResetSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPort` <a name="PutPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort"></a>

```csharp
private void PutPort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort.parameter.value"></a>

- *Type:* object

---

##### `PutSessionAffinityConfig` <a name="PutSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig"></a>

```csharp
private void PutSessionAffinityConfig(ServiceV1SpecSessionAffinityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `ResetAllocateLoadBalancerNodePorts` <a name="ResetAllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts"></a>

```csharp
private void ResetAllocateLoadBalancerNodePorts()
```

##### `ResetClusterIp` <a name="ResetClusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp"></a>

```csharp
private void ResetClusterIp()
```

##### `ResetClusterIps` <a name="ResetClusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps"></a>

```csharp
private void ResetClusterIps()
```

##### `ResetExternalIps` <a name="ResetExternalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps"></a>

```csharp
private void ResetExternalIps()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName"></a>

```csharp
private void ResetExternalName()
```

##### `ResetExternalTrafficPolicy` <a name="ResetExternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy"></a>

```csharp
private void ResetExternalTrafficPolicy()
```

##### `ResetHealthCheckNodePort` <a name="ResetHealthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort"></a>

```csharp
private void ResetHealthCheckNodePort()
```

##### `ResetInternalTrafficPolicy` <a name="ResetInternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy"></a>

```csharp
private void ResetInternalTrafficPolicy()
```

##### `ResetIpFamilies` <a name="ResetIpFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies"></a>

```csharp
private void ResetIpFamilies()
```

##### `ResetIpFamilyPolicy` <a name="ResetIpFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy"></a>

```csharp
private void ResetIpFamilyPolicy()
```

##### `ResetLoadBalancerClass` <a name="ResetLoadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass"></a>

```csharp
private void ResetLoadBalancerClass()
```

##### `ResetLoadBalancerIp` <a name="ResetLoadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp"></a>

```csharp
private void ResetLoadBalancerIp()
```

##### `ResetLoadBalancerSourceRanges` <a name="ResetLoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges"></a>

```csharp
private void ResetLoadBalancerSourceRanges()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPublishNotReadyAddresses` <a name="ResetPublishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses"></a>

```csharp
private void ResetPublishNotReadyAddresses()
```

##### `ResetSelector` <a name="ResetSelector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector"></a>

```csharp
private void ResetSelector()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity"></a>

```csharp
private void ResetSessionAffinity()
```

##### `ResetSessionAffinityConfig` <a name="ResetSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig"></a>

```csharp
private void ResetSessionAffinityConfig()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig">SessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput">AllocateLoadBalancerNodePortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput">ClusterIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput">ClusterIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput">ExternalIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput">ExternalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput">ExternalTrafficPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput">HealthCheckNodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput">InternalTrafficPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput">IpFamiliesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput">IpFamilyPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput">LoadBalancerClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput">LoadBalancerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput">LoadBalancerSourceRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput">PortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput">PublishNotReadyAddressesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput">SelectorInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput">SessionAffinityConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts">AllocateLoadBalancerNodePorts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp">ClusterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps">ClusterIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps">ExternalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName">ExternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy">ExternalTrafficPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort">HealthCheckNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy">InternalTrafficPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies">IpFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy">IpFamilyPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass">LoadBalancerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp">LoadBalancerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges">LoadBalancerSourceRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses">PublishNotReadyAddresses</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector">Selector</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port"></a>

```csharp
public ServiceV1SpecPortList Port { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a>

---

##### `SessionAffinityConfig`<sup>Required</sup> <a name="SessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig"></a>

```csharp
public ServiceV1SpecSessionAffinityConfigOutputReference SessionAffinityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a>

---

##### `AllocateLoadBalancerNodePortsInput`<sup>Optional</sup> <a name="AllocateLoadBalancerNodePortsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput"></a>

```csharp
public object AllocateLoadBalancerNodePortsInput { get; }
```

- *Type:* object

---

##### `ClusterIpInput`<sup>Optional</sup> <a name="ClusterIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput"></a>

```csharp
public string ClusterIpInput { get; }
```

- *Type:* string

---

##### `ClusterIpsInput`<sup>Optional</sup> <a name="ClusterIpsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput"></a>

```csharp
public string[] ClusterIpsInput { get; }
```

- *Type:* string[]

---

##### `ExternalIpsInput`<sup>Optional</sup> <a name="ExternalIpsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput"></a>

```csharp
public string[] ExternalIpsInput { get; }
```

- *Type:* string[]

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput"></a>

```csharp
public string ExternalNameInput { get; }
```

- *Type:* string

---

##### `ExternalTrafficPolicyInput`<sup>Optional</sup> <a name="ExternalTrafficPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput"></a>

```csharp
public string ExternalTrafficPolicyInput { get; }
```

- *Type:* string

---

##### `HealthCheckNodePortInput`<sup>Optional</sup> <a name="HealthCheckNodePortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput"></a>

```csharp
public double HealthCheckNodePortInput { get; }
```

- *Type:* double

---

##### `InternalTrafficPolicyInput`<sup>Optional</sup> <a name="InternalTrafficPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput"></a>

```csharp
public string InternalTrafficPolicyInput { get; }
```

- *Type:* string

---

##### `IpFamiliesInput`<sup>Optional</sup> <a name="IpFamiliesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput"></a>

```csharp
public string[] IpFamiliesInput { get; }
```

- *Type:* string[]

---

##### `IpFamilyPolicyInput`<sup>Optional</sup> <a name="IpFamilyPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput"></a>

```csharp
public string IpFamilyPolicyInput { get; }
```

- *Type:* string

---

##### `LoadBalancerClassInput`<sup>Optional</sup> <a name="LoadBalancerClassInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput"></a>

```csharp
public string LoadBalancerClassInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIpInput`<sup>Optional</sup> <a name="LoadBalancerIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput"></a>

```csharp
public string LoadBalancerIpInput { get; }
```

- *Type:* string

---

##### `LoadBalancerSourceRangesInput`<sup>Optional</sup> <a name="LoadBalancerSourceRangesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput"></a>

```csharp
public string[] LoadBalancerSourceRangesInput { get; }
```

- *Type:* string[]

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput"></a>

```csharp
public object PortInput { get; }
```

- *Type:* object

---

##### `PublishNotReadyAddressesInput`<sup>Optional</sup> <a name="PublishNotReadyAddressesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput"></a>

```csharp
public object PublishNotReadyAddressesInput { get; }
```

- *Type:* object

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SelectorInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SessionAffinityConfigInput`<sup>Optional</sup> <a name="SessionAffinityConfigInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput"></a>

```csharp
public ServiceV1SpecSessionAffinityConfig SessionAffinityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput"></a>

```csharp
public string SessionAffinityInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AllocateLoadBalancerNodePorts`<sup>Required</sup> <a name="AllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```csharp
public object AllocateLoadBalancerNodePorts { get; }
```

- *Type:* object

---

##### `ClusterIp`<sup>Required</sup> <a name="ClusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp"></a>

```csharp
public string ClusterIp { get; }
```

- *Type:* string

---

##### `ClusterIps`<sup>Required</sup> <a name="ClusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps"></a>

```csharp
public string[] ClusterIps { get; }
```

- *Type:* string[]

---

##### `ExternalIps`<sup>Required</sup> <a name="ExternalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps"></a>

```csharp
public string[] ExternalIps { get; }
```

- *Type:* string[]

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName"></a>

```csharp
public string ExternalName { get; }
```

- *Type:* string

---

##### `ExternalTrafficPolicy`<sup>Required</sup> <a name="ExternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy"></a>

```csharp
public string ExternalTrafficPolicy { get; }
```

- *Type:* string

---

##### `HealthCheckNodePort`<sup>Required</sup> <a name="HealthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort"></a>

```csharp
public double HealthCheckNodePort { get; }
```

- *Type:* double

---

##### `InternalTrafficPolicy`<sup>Required</sup> <a name="InternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy"></a>

```csharp
public string InternalTrafficPolicy { get; }
```

- *Type:* string

---

##### `IpFamilies`<sup>Required</sup> <a name="IpFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies"></a>

```csharp
public string[] IpFamilies { get; }
```

- *Type:* string[]

---

##### `IpFamilyPolicy`<sup>Required</sup> <a name="IpFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy"></a>

```csharp
public string IpFamilyPolicy { get; }
```

- *Type:* string

---

##### `LoadBalancerClass`<sup>Required</sup> <a name="LoadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass"></a>

```csharp
public string LoadBalancerClass { get; }
```

- *Type:* string

---

##### `LoadBalancerIp`<sup>Required</sup> <a name="LoadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp"></a>

```csharp
public string LoadBalancerIp { get; }
```

- *Type:* string

---

##### `LoadBalancerSourceRanges`<sup>Required</sup> <a name="LoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges"></a>

```csharp
public string[] LoadBalancerSourceRanges { get; }
```

- *Type:* string[]

---

##### `PublishNotReadyAddresses`<sup>Required</sup> <a name="PublishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses"></a>

```csharp
public object PublishNotReadyAddresses { get; }
```

- *Type:* object

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Selector { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue"></a>

```csharp
public ServiceV1Spec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---


### ServiceV1SpecPortList <a name="ServiceV1SpecPortList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get"></a>

```csharp
private ServiceV1SpecPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceV1SpecPortOutputReference <a name="ServiceV1SpecPortOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol">ResetAppProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort">ResetNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort">ResetTargetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppProtocol` <a name="ResetAppProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol"></a>

```csharp
private void ResetAppProtocol()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNodePort` <a name="ResetNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort"></a>

```csharp
private void ResetNodePort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetTargetPort` <a name="ResetTargetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort"></a>

```csharp
private void ResetTargetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput">AppProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput">NodePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput">TargetPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol">AppProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort">NodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort">TargetPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppProtocolInput`<sup>Optional</sup> <a name="AppProtocolInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput"></a>

```csharp
public string AppProtocolInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodePortInput`<sup>Optional</sup> <a name="NodePortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput"></a>

```csharp
public double NodePortInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TargetPortInput`<sup>Optional</sup> <a name="TargetPortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput"></a>

```csharp
public string TargetPortInput { get; }
```

- *Type:* string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol"></a>

```csharp
public string AppProtocol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodePort`<sup>Required</sup> <a name="NodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort"></a>

```csharp
public double NodePort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort"></a>

```csharp
public string TargetPort { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ServiceV1SpecSessionAffinityConfigClientIpOutputReference <a name="ServiceV1SpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecSessionAffinityConfigClientIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```csharp
public ServiceV1SpecSessionAffinityConfigClientIp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---


### ServiceV1SpecSessionAffinityConfigOutputReference <a name="ServiceV1SpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1SpecSessionAffinityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp">PutClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp">ResetClientIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientIp` <a name="PutClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp"></a>

```csharp
private void PutClientIp(ServiceV1SpecSessionAffinityConfigClientIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `ResetClientIp` <a name="ResetClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp"></a>

```csharp
private void ResetClientIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp">ClientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput">ClientIpInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```csharp
public ServiceV1SpecSessionAffinityConfigClientIpOutputReference ClientIp { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a>

---

##### `ClientIpInput`<sup>Optional</sup> <a name="ClientIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput"></a>

```csharp
public ServiceV1SpecSessionAffinityConfigClientIp ClientIpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```csharp
public ServiceV1SpecSessionAffinityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---


### ServiceV1StatusList <a name="ServiceV1StatusList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get"></a>

```csharp
private ServiceV1StatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServiceV1StatusLoadBalancerIngressList <a name="ServiceV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusLoadBalancerIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get"></a>

```csharp
private ServiceV1StatusLoadBalancerIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServiceV1StatusLoadBalancerIngressOutputReference <a name="ServiceV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusLoadBalancerIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```csharp
public ServiceV1StatusLoadBalancerIngress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a>

---


### ServiceV1StatusLoadBalancerList <a name="ServiceV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get"></a>

```csharp
private ServiceV1StatusLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ServiceV1StatusLoadBalancerOutputReference <a name="ServiceV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress"></a>

```csharp
public ServiceV1StatusLoadBalancerIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public ServiceV1StatusLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a>

---


### ServiceV1StatusOutputReference <a name="ServiceV1StatusOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1StatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer"></a>

```csharp
public ServiceV1StatusLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue"></a>

```csharp
public ServiceV1Status InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a>

---


### ServiceV1TimeoutsOutputReference <a name="ServiceV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new ServiceV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


