// https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#metadata NetworkPolicy#metadata}
  */
  readonly metadata: NetworkPolicyMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#spec NetworkPolicy#spec}
  */
  readonly spec: NetworkPolicySpec;
}
export interface NetworkPolicyMetadata {
  /**
  * An unstructured key value map stored with the network policy that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#annotations NetworkPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#generate_name NetworkPolicy#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the network policy. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#labels NetworkPolicy#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the network policy, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#name NetworkPolicy#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the network policy must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace NetworkPolicy#namespace}
  */
  readonly namespace?: string;
}

export function networkPolicyMetadataToTerraform(struct?: NetworkPolicyMetadataOutputReference | NetworkPolicyMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class NetworkPolicyMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicyMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface NetworkPolicySpecEgressPorts {
  /**
  * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#port NetworkPolicy#port}
  */
  readonly port?: string;
  /**
  * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicySpecEgressPortsToTerraform(struct?: NetworkPolicySpecEgressPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface NetworkPolicySpecEgressToIpBlock {
  /**
  * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#cidr NetworkPolicy#cidr}
  */
  readonly cidr?: string;
  /**
  * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#except NetworkPolicy#except}
  */
  readonly except?: string[];
}

export function networkPolicySpecEgressToIpBlockToTerraform(struct?: NetworkPolicySpecEgressToIpBlockOutputReference | NetworkPolicySpecEgressToIpBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.except),
  }
}

export class NetworkPolicySpecEgressToIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecEgressToIpBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecEgressToIpBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
      this._except = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}
export interface NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicySpecEgressToNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecEgressToNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[];
}

export function networkPolicySpecEgressToNamespaceSelectorToTerraform(struct?: NetworkPolicySpecEgressToNamespaceSelectorOutputReference | NetworkPolicySpecEgressToNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecEgressToNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecEgressToNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecEgressToNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecEgressToNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[]; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecEgressToNamespaceSelectorMatchExpressions[]) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface NetworkPolicySpecEgressToPodSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicySpecEgressToPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecEgressToPodSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecEgressToPodSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecEgressToPodSelectorMatchExpressions[];
}

export function networkPolicySpecEgressToPodSelectorToTerraform(struct?: NetworkPolicySpecEgressToPodSelectorOutputReference | NetworkPolicySpecEgressToPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecEgressToPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecEgressToPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecEgressToPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecEgressToPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecEgressToPodSelectorMatchExpressions[]; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecEgressToPodSelectorMatchExpressions[]) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface NetworkPolicySpecEgressTo {
  /**
  * ip_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecEgressToIpBlock;
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecEgressToNamespaceSelector;
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicySpecEgressToPodSelector;
}

export function networkPolicySpecEgressToToTerraform(struct?: NetworkPolicySpecEgressTo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: networkPolicySpecEgressToIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: networkPolicySpecEgressToNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicySpecEgressToPodSelectorToTerraform(struct!.podSelector),
  }
}

export interface NetworkPolicySpecEgress {
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicySpecEgressPorts[];
  /**
  * to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#to NetworkPolicy#to}
  */
  readonly to?: NetworkPolicySpecEgressTo[];
}

export function networkPolicySpecEgressToTerraform(struct?: NetworkPolicySpecEgress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(networkPolicySpecEgressPortsToTerraform)(struct!.ports),
    to: cdktf.listMapper(networkPolicySpecEgressToToTerraform)(struct!.to),
  }
}

export interface NetworkPolicySpecIngressFromIpBlock {
  /**
  * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#cidr NetworkPolicy#cidr}
  */
  readonly cidr?: string;
  /**
  * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#except NetworkPolicy#except}
  */
  readonly except?: string[];
}

export function networkPolicySpecIngressFromIpBlockToTerraform(struct?: NetworkPolicySpecIngressFromIpBlockOutputReference | NetworkPolicySpecIngressFromIpBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.except),
  }
}

export class NetworkPolicySpecIngressFromIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecIngressFromIpBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._except) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecIngressFromIpBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
      this._except = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}
export interface NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicySpecIngressFromNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecIngressFromNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[];
}

export function networkPolicySpecIngressFromNamespaceSelectorToTerraform(struct?: NetworkPolicySpecIngressFromNamespaceSelectorOutputReference | NetworkPolicySpecIngressFromNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecIngressFromNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecIngressFromNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecIngressFromNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecIngressFromNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[]; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecIngressFromNamespaceSelectorMatchExpressions[]) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface NetworkPolicySpecIngressFromPodSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicySpecIngressFromPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecIngressFromPodSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[];
}

export function networkPolicySpecIngressFromPodSelectorToTerraform(struct?: NetworkPolicySpecIngressFromPodSelectorOutputReference | NetworkPolicySpecIngressFromPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecIngressFromPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecIngressFromPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecIngressFromPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecIngressFromPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[]; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecIngressFromPodSelectorMatchExpressions[]) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface NetworkPolicySpecIngressFrom {
  /**
  * ip_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: NetworkPolicySpecIngressFromIpBlock;
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicySpecIngressFromNamespaceSelector;
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicySpecIngressFromPodSelector;
}

export function networkPolicySpecIngressFromToTerraform(struct?: NetworkPolicySpecIngressFrom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: networkPolicySpecIngressFromIpBlockToTerraform(struct!.ipBlock),
    namespace_selector: networkPolicySpecIngressFromNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicySpecIngressFromPodSelectorToTerraform(struct!.podSelector),
  }
}

export interface NetworkPolicySpecIngressPorts {
  /**
  * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#port NetworkPolicy#port}
  */
  readonly port?: string;
  /**
  * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicySpecIngressPortsToTerraform(struct?: NetworkPolicySpecIngressPorts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface NetworkPolicySpecIngress {
  /**
  * from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#from NetworkPolicy#from}
  */
  readonly from?: NetworkPolicySpecIngressFrom[];
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicySpecIngressPorts[];
}

export function networkPolicySpecIngressToTerraform(struct?: NetworkPolicySpecIngress): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(networkPolicySpecIngressFromToTerraform)(struct!.from),
    ports: cdktf.listMapper(networkPolicySpecIngressPortsToTerraform)(struct!.ports),
  }
}

export interface NetworkPolicySpecPodSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicySpecPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicySpecPodSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface NetworkPolicySpecPodSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicySpecPodSelectorMatchExpressions[];
}

export function networkPolicySpecPodSelectorToTerraform(struct?: NetworkPolicySpecPodSelectorOutputReference | NetworkPolicySpecPodSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicySpecPodSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class NetworkPolicySpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpecPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpecPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: NetworkPolicySpecPodSelectorMatchExpressions[]; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: NetworkPolicySpecPodSelectorMatchExpressions[]) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions;
  }
}
export interface NetworkPolicySpec {
  /**
  * List of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of Ingress or Egress rules; policies that contain an Egress section are assumed to affect Egress, and all policies (whether or not they contain an Ingress section) are assumed to affect Ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an Egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#policy_types NetworkPolicy#policy_types}
  */
  readonly policyTypes: string[];
  /**
  * egress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#egress NetworkPolicy#egress}
  */
  readonly egress?: NetworkPolicySpecEgress[];
  /**
  * ingress block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#ingress NetworkPolicy#ingress}
  */
  readonly ingress?: NetworkPolicySpecIngress[];
  /**
  * pod_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector: NetworkPolicySpecPodSelector;
}

export function networkPolicySpecToTerraform(struct?: NetworkPolicySpecOutputReference | NetworkPolicySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.policyTypes),
    egress: cdktf.listMapper(networkPolicySpecEgressToTerraform)(struct!.egress),
    ingress: cdktf.listMapper(networkPolicySpecIngressToTerraform)(struct!.ingress),
    pod_selector: networkPolicySpecPodSelectorToTerraform(struct!.podSelector),
  }
}

export class NetworkPolicySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NetworkPolicySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyTypes) {
      hasAnyValues = true;
      internalValueResult.policyTypes = this._policyTypes;
    }
    if (this._egress) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._ingress) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress;
    }
    if (this._podSelector?.internalValue) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyTypes = undefined;
      this._egress = undefined;
      this._ingress = undefined;
      this._podSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyTypes = value.policyTypes;
      this._egress = value.egress;
      this._ingress = value.ingress;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // policy_types - computed: false, optional: false, required: true
  private _policyTypes?: string[]; 
  public get policyTypes() {
    return this.getListAttribute('policy_types');
  }
  public set policyTypes(value: string[]) {
    this._policyTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypesInput() {
    return this._policyTypes;
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: NetworkPolicySpecEgress[]; 
  public get egress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress') as any;
  }
  public set egress(value: NetworkPolicySpecEgress[]) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: NetworkPolicySpecIngress[]; 
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress') as any;
  }
  public set ingress(value: NetworkPolicySpecIngress[]) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new NetworkPolicySpecPodSelectorOutputReference(this as any, "pod_selector", true);
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: NetworkPolicySpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html kubernetes_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_network_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/network_policy.html kubernetes_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_network_policy',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new NetworkPolicyMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NetworkPolicyMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new NetworkPolicySpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: NetworkPolicySpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: networkPolicyMetadataToTerraform(this._metadata.internalValue),
      spec: networkPolicySpecToTerraform(this._spec.internalValue),
    };
  }
}
