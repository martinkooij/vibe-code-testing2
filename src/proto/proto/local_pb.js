// source: proto/local.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.rocsys.os.local.v2alpha.AbortRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AbortResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AbortResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AbortResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ApiVersionRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ApiVersionResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AuthEquipmentId', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AuthIso15118_2', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AuthMachineCredentials', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AuthNoCredentials', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AuthUnamePassword', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DetailedState', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockAsyncRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockAsyncResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockAsyncResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockBlockingRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockBlockingResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.DockBlockingResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.EchoRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.EchoResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.GetTokenRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.GetTokenRequest.CredentialsCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.GetTokenResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.GetTokenResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.HaltRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.HaltResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.HaltResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.HaltResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.Issue', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.Issue.IsTransitioning', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.Issue.TokenDenied', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.Issue.Unknown', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.OperationResult', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.RocInfoRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.RocInfoResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.RocState', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.State', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.StatePlusRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.StatePlusResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.StateRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.StateResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UUID', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockAsyncRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockAsyncResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockAsyncResponse.ResponseCase', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockBlockingRequest', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockBlockingResponse', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload', null, global);
goog.exportSymbol('proto.rocsys.os.local.v2alpha.UndockBlockingResponse.ResponseCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UUID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UUID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UUID.displayName = 'proto.rocsys.os.local.v2alpha.UUID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.RocState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.RocState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.RocState.displayName = 'proto.rocsys.os.local.v2alpha.RocState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.Issue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.Issue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.Issue.displayName = 'proto.rocsys.os.local.v2alpha.Issue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.Issue.Unknown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.Issue.Unknown.displayName = 'proto.rocsys.os.local.v2alpha.Issue.Unknown';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.Issue.TokenDenied, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.Issue.TokenDenied.displayName = 'proto.rocsys.os.local.v2alpha.Issue.TokenDenied';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.displayName = 'proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.displayName = 'proto.rocsys.os.local.v2alpha.Issue.IsTransitioning';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.displayName = 'proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.GetTokenRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.GetTokenRequest.displayName = 'proto.rocsys.os.local.v2alpha.GetTokenRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AuthNoCredentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AuthNoCredentials.displayName = 'proto.rocsys.os.local.v2alpha.AuthNoCredentials';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AuthUnamePassword, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AuthUnamePassword.displayName = 'proto.rocsys.os.local.v2alpha.AuthUnamePassword';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AuthMachineCredentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AuthMachineCredentials.displayName = 'proto.rocsys.os.local.v2alpha.AuthMachineCredentials';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AuthEquipmentId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AuthEquipmentId.displayName = 'proto.rocsys.os.local.v2alpha.AuthEquipmentId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AuthIso15118_2, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AuthIso15118_2.displayName = 'proto.rocsys.os.local.v2alpha.AuthIso15118_2';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.GetTokenResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.GetTokenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.GetTokenResponse.displayName = 'proto.rocsys.os.local.v2alpha.GetTokenResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ApiVersionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ApiVersionRequest.displayName = 'proto.rocsys.os.local.v2alpha.ApiVersionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.rocsys.os.local.v2alpha.ApiVersionResponse.repeatedFields_, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ApiVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ApiVersionResponse.displayName = 'proto.rocsys.os.local.v2alpha.ApiVersionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.RocInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.RocInfoRequest.displayName = 'proto.rocsys.os.local.v2alpha.RocInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.RocInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.RocInfoResponse.displayName = 'proto.rocsys.os.local.v2alpha.RocInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.EchoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.EchoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.EchoRequest.displayName = 'proto.rocsys.os.local.v2alpha.EchoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.EchoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.EchoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.EchoResponse.displayName = 'proto.rocsys.os.local.v2alpha.EchoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.DockBlockingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.DockBlockingRequest.displayName = 'proto.rocsys.os.local.v2alpha.DockBlockingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.DockBlockingResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.DockBlockingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.DockBlockingResponse.displayName = 'proto.rocsys.os.local.v2alpha.DockBlockingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.DockAsyncRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.DockAsyncRequest.displayName = 'proto.rocsys.os.local.v2alpha.DockAsyncRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.DockAsyncResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.DockAsyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.DockAsyncResponse.displayName = 'proto.rocsys.os.local.v2alpha.DockAsyncResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UndockBlockingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UndockBlockingRequest.displayName = 'proto.rocsys.os.local.v2alpha.UndockBlockingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.UndockBlockingResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UndockBlockingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UndockBlockingResponse.displayName = 'proto.rocsys.os.local.v2alpha.UndockBlockingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UndockAsyncRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UndockAsyncRequest.displayName = 'proto.rocsys.os.local.v2alpha.UndockAsyncRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.UndockAsyncResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UndockAsyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UndockAsyncResponse.displayName = 'proto.rocsys.os.local.v2alpha.UndockAsyncResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.HaltRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.HaltRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.HaltRequest.displayName = 'proto.rocsys.os.local.v2alpha.HaltRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.HaltResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.HaltResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.HaltResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.HaltResponse.displayName = 'proto.rocsys.os.local.v2alpha.HaltResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.HaltResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.HaltResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.HaltResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AbortRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AbortRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AbortRequest.displayName = 'proto.rocsys.os.local.v2alpha.AbortRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AbortResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.AbortResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AbortResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AbortResponse.displayName = 'proto.rocsys.os.local.v2alpha.AbortResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AbortResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AbortResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.AbortResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.StateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.StateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.StateRequest.displayName = 'proto.rocsys.os.local.v2alpha.StateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.StateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.StateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.StateResponse.displayName = 'proto.rocsys.os.local.v2alpha.StateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.displayName = 'proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.displayName = 'proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.displayName = 'proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.displayName = 'proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.displayName = 'proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.displayName = 'proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.displayName = 'proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.oneofGroups_);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.displayName = 'proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.displayName = 'proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.StatePlusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.StatePlusRequest.displayName = 'proto.rocsys.os.local.v2alpha.StatePlusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rocsys.os.local.v2alpha.StatePlusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rocsys.os.local.v2alpha.StatePlusResponse.displayName = 'proto.rocsys.os.local.v2alpha.StatePlusResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UUID.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UUID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UUID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UUID.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UUID}
 */
proto.rocsys.os.local.v2alpha.UUID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UUID;
  return proto.rocsys.os.local.v2alpha.UUID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UUID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UUID}
 */
proto.rocsys.os.local.v2alpha.UUID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UUID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UUID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UUID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UUID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.UUID.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.UUID} returns this
 */
proto.rocsys.os.local.v2alpha.UUID.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.RocState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.RocState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.RocState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    detailedState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    inProgress: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    acdcUuid: (f = msg.getAcdcUuid()) && proto.rocsys.os.local.v2alpha.UUID.toObject(includeInstance, f),
    isTransitioning: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    result: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.RocState}
 */
proto.rocsys.os.local.v2alpha.RocState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.RocState;
  return proto.rocsys.os.local.v2alpha.RocState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.RocState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.RocState}
 */
proto.rocsys.os.local.v2alpha.RocState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.DetailedState} */ (reader.readEnum());
      msg.setDetailedState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInProgress(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.UUID;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.UUID.deserializeBinaryFromReader);
      msg.setAcdcUuid(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTransitioning(value);
      break;
    case 6:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.RocState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.RocState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.RocState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDetailedState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getInProgress();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAcdcUuid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.UUID.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional State state = 1;
 * @return {!proto.rocsys.os.local.v2alpha.State}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.getState = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.State} value
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DetailedState detailed_state = 2;
 * @return {!proto.rocsys.os.local.v2alpha.DetailedState}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.getDetailedState = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.DetailedState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.DetailedState} value
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.setDetailedState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool in_progress = 3;
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.getInProgress = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.setInProgress = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional UUID acdc_uuid = 4;
 * @return {?proto.rocsys.os.local.v2alpha.UUID}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.getAcdcUuid = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.UUID, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.UUID|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
*/
proto.rocsys.os.local.v2alpha.RocState.prototype.setAcdcUuid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.clearAcdcUuid = function() {
  return this.setAcdcUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.hasAcdcUuid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_transitioning = 5;
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.getIsTransitioning = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional OperationResult result = 6;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.RocState} returns this
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.clearResult = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.RocState.prototype.hasResult = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.Issue.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.Issue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.Issue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.Issue}
 */
proto.rocsys.os.local.v2alpha.Issue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.Issue;
  return proto.rocsys.os.local.v2alpha.Issue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.Issue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.Issue}
 */
proto.rocsys.os.local.v2alpha.Issue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.Issue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.Issue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.Issue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.Issue.Unknown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
  return proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.Unknown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.Unknown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.Issue.TokenDenied.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.Issue.TokenDenied} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.TokenDenied}
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.Issue.TokenDenied;
  return proto.rocsys.os.local.v2alpha.Issue.TokenDenied.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.TokenDenied} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.TokenDenied}
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.Issue.TokenDenied.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.TokenDenied} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.TokenDenied.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod}
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod;
  return proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod}
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
  return proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject = function(includeInstance, msg) {
  var f, obj = {
    explanation: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
  return proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExplanation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExplanation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string explanation = 1;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.prototype.getExplanation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} returns this
 */
proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.prototype.setExplanation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.CredentialsCase = {
  CREDENTIALS_NOT_SET: 0,
  NO_CREDENTIALS: 1,
  EQUIPMENT_ID: 2,
  UNAME_PASSWORD: 3,
  MACHINE_CREDENTIALS: 4,
  ISO_15118_2: 5
};

/**
 * @return {proto.rocsys.os.local.v2alpha.GetTokenRequest.CredentialsCase}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.getCredentialsCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.GetTokenRequest.CredentialsCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.GetTokenRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    noCredentials: (f = msg.getNoCredentials()) && proto.rocsys.os.local.v2alpha.AuthNoCredentials.toObject(includeInstance, f),
    equipmentId: (f = msg.getEquipmentId()) && proto.rocsys.os.local.v2alpha.AuthEquipmentId.toObject(includeInstance, f),
    unamePassword: (f = msg.getUnamePassword()) && proto.rocsys.os.local.v2alpha.AuthUnamePassword.toObject(includeInstance, f),
    machineCredentials: (f = msg.getMachineCredentials()) && proto.rocsys.os.local.v2alpha.AuthMachineCredentials.toObject(includeInstance, f),
    iso151182: (f = msg.getIso151182()) && proto.rocsys.os.local.v2alpha.AuthIso15118_2.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.GetTokenRequest;
  return proto.rocsys.os.local.v2alpha.GetTokenRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.AuthNoCredentials;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AuthNoCredentials.deserializeBinaryFromReader);
      msg.setNoCredentials(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.AuthEquipmentId;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AuthEquipmentId.deserializeBinaryFromReader);
      msg.setEquipmentId(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.AuthUnamePassword;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AuthUnamePassword.deserializeBinaryFromReader);
      msg.setUnamePassword(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.AuthMachineCredentials;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AuthMachineCredentials.deserializeBinaryFromReader);
      msg.setMachineCredentials(value);
      break;
    case 5:
      var value = new proto.rocsys.os.local.v2alpha.AuthIso15118_2;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AuthIso15118_2.deserializeBinaryFromReader);
      msg.setIso151182(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.GetTokenRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNoCredentials();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.AuthNoCredentials.serializeBinaryToWriter
    );
  }
  f = message.getEquipmentId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.AuthEquipmentId.serializeBinaryToWriter
    );
  }
  f = message.getUnamePassword();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.AuthUnamePassword.serializeBinaryToWriter
    );
  }
  f = message.getMachineCredentials();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.AuthMachineCredentials.serializeBinaryToWriter
    );
  }
  f = message.getIso151182();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.rocsys.os.local.v2alpha.AuthIso15118_2.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthNoCredentials no_credentials = 1;
 * @return {?proto.rocsys.os.local.v2alpha.AuthNoCredentials}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.getNoCredentials = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AuthNoCredentials} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AuthNoCredentials, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AuthNoCredentials|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.setNoCredentials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.clearNoCredentials = function() {
  return this.setNoCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.hasNoCredentials = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AuthEquipmentId equipment_id = 2;
 * @return {?proto.rocsys.os.local.v2alpha.AuthEquipmentId}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.getEquipmentId = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AuthEquipmentId} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AuthEquipmentId, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AuthEquipmentId|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.setEquipmentId = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.clearEquipmentId = function() {
  return this.setEquipmentId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.hasEquipmentId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuthUnamePassword uname_password = 3;
 * @return {?proto.rocsys.os.local.v2alpha.AuthUnamePassword}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.getUnamePassword = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AuthUnamePassword} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AuthUnamePassword, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AuthUnamePassword|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.setUnamePassword = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.clearUnamePassword = function() {
  return this.setUnamePassword(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.hasUnamePassword = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AuthMachineCredentials machine_credentials = 4;
 * @return {?proto.rocsys.os.local.v2alpha.AuthMachineCredentials}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.getMachineCredentials = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AuthMachineCredentials} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AuthMachineCredentials, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AuthMachineCredentials|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.setMachineCredentials = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.clearMachineCredentials = function() {
  return this.setMachineCredentials(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.hasMachineCredentials = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AuthIso15118_2 iso_15118_2 = 5;
 * @return {?proto.rocsys.os.local.v2alpha.AuthIso15118_2}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.getIso151182 = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AuthIso15118_2} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AuthIso15118_2, 5));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AuthIso15118_2|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.setIso151182 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.rocsys.os.local.v2alpha.GetTokenRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenRequest} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.clearIso151182 = function() {
  return this.setIso151182(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenRequest.prototype.hasIso151182 = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AuthNoCredentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AuthNoCredentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AuthNoCredentials}
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AuthNoCredentials;
  return proto.rocsys.os.local.v2alpha.AuthNoCredentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AuthNoCredentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AuthNoCredentials}
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AuthNoCredentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AuthNoCredentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthNoCredentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AuthUnamePassword.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AuthUnamePassword} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.toObject = function(includeInstance, msg) {
  var f, obj = {
    uname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AuthUnamePassword}
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AuthUnamePassword;
  return proto.rocsys.os.local.v2alpha.AuthUnamePassword.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AuthUnamePassword} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AuthUnamePassword}
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AuthUnamePassword.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AuthUnamePassword} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string uname = 1;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.prototype.getUname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.AuthUnamePassword} returns this
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.prototype.setUname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.AuthUnamePassword} returns this
 */
proto.rocsys.os.local.v2alpha.AuthUnamePassword.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AuthMachineCredentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    machineId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    machineSecret: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials}
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AuthMachineCredentials;
  return proto.rocsys.os.local.v2alpha.AuthMachineCredentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials}
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMachineId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMachineSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AuthMachineCredentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMachineId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMachineSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string machine_id = 1;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.prototype.getMachineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials} returns this
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.prototype.setMachineId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string machine_secret = 2;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.prototype.getMachineSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.AuthMachineCredentials} returns this
 */
proto.rocsys.os.local.v2alpha.AuthMachineCredentials.prototype.setMachineSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AuthEquipmentId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AuthEquipmentId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.toObject = function(includeInstance, msg) {
  var f, obj = {
    equipmentId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AuthEquipmentId}
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AuthEquipmentId;
  return proto.rocsys.os.local.v2alpha.AuthEquipmentId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AuthEquipmentId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AuthEquipmentId}
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEquipmentId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AuthEquipmentId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AuthEquipmentId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEquipmentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string equipment_id = 1;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.prototype.getEquipmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.AuthEquipmentId} returns this
 */
proto.rocsys.os.local.v2alpha.AuthEquipmentId.prototype.setEquipmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AuthIso15118_2.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AuthIso15118_2} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AuthIso15118_2}
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AuthIso15118_2;
  return proto.rocsys.os.local.v2alpha.AuthIso15118_2.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AuthIso15118_2} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AuthIso15118_2}
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AuthIso15118_2.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AuthIso15118_2} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AuthIso15118_2.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  UNSUPPORTED_GET_TOKEN_METHOD: 2,
  TOKEN_DENIED: 3
};

/**
 * @return {proto.rocsys.os.local.v2alpha.GetTokenResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.GetTokenResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.GetTokenResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.GetTokenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.toObject(includeInstance, f),
    unsupportedGetTokenMethod: (f = msg.getUnsupportedGetTokenMethod()) && proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.toObject(includeInstance, f),
    tokenDenied: (f = msg.getTokenDenied()) && proto.rocsys.os.local.v2alpha.Issue.TokenDenied.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.GetTokenResponse;
  return proto.rocsys.os.local.v2alpha.GetTokenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.deserializeBinaryFromReader);
      msg.setUnsupportedGetTokenMethod(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.TokenDenied;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.TokenDenied.deserializeBinaryFromReader);
      msg.setTokenDenied(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.GetTokenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getUnsupportedGetTokenMethod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod.serializeBinaryToWriter
    );
  }
  f = message.getTokenDenied();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.TokenDenied.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    bearerToken: jspb.Message.getFieldWithDefault(msg, 1, ""),
    validity: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload;
  return proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBearerToken(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setValidity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBearerToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValidity();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string bearer_token = 1;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.prototype.getBearerToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.prototype.setBearerToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 validity = 2;
 * @return {number}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.prototype.getValidity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload.prototype.setValidity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.GetTokenResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.GetTokenResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.UnsupportedGetTokenMethod unsupported_get_token_method = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.getUnsupportedGetTokenMethod = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.UnsupportedGetTokenMethod|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.setUnsupportedGetTokenMethod = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.GetTokenResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.clearUnsupportedGetTokenMethod = function() {
  return this.setUnsupportedGetTokenMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.hasUnsupportedGetTokenMethod = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.TokenDenied token_denied = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.TokenDenied}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.getTokenDenied = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.TokenDenied} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.TokenDenied, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.TokenDenied|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse} returns this
*/
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.setTokenDenied = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.GetTokenResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.GetTokenResponse} returns this
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.clearTokenDenied = function() {
  return this.setTokenDenied(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.GetTokenResponse.prototype.hasTokenDenied = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ApiVersionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ApiVersionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionRequest}
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ApiVersionRequest;
  return proto.rocsys.os.local.v2alpha.ApiVersionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ApiVersionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionRequest}
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ApiVersionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ApiVersionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ApiVersionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ApiVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiMajorVersionList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    apiMinorVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    apiMinorVersionMarker: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ApiVersionResponse;
  return proto.rocsys.os.local.v2alpha.ApiVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addApiMajorVersion(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApiMinorVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiMinorVersionMarker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ApiVersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiMajorVersionList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getApiMinorVersion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getApiMinorVersionMarker();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated uint32 api_major_version = 1;
 * @return {!Array<number>}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.getApiMajorVersionList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.setApiMajorVersionList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.addApiMajorVersion = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.clearApiMajorVersionList = function() {
  return this.setApiMajorVersionList([]);
};


/**
 * optional uint32 api_minor_version = 2;
 * @return {number}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.getApiMinorVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.setApiMinorVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string api_minor_version_marker = 3;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.getApiMinorVersionMarker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.ApiVersionResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ApiVersionResponse.prototype.setApiMinorVersionMarker = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.RocInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.RocInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoRequest}
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.RocInfoRequest;
  return proto.rocsys.os.local.v2alpha.RocInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.RocInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoRequest}
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.RocInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.RocInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.RocInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.RocInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.RocInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: (f = msg.getUuid()) && proto.rocsys.os.local.v2alpha.UUID.toObject(includeInstance, f),
    serialNumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    softwareVersion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rocTypeName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    iotId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.RocInfoResponse;
  return proto.rocsys.os.local.v2alpha.RocInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.RocInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.UUID;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.UUID.deserializeBinaryFromReader);
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSerialNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSoftwareVersion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRocTypeName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.RocInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.RocInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.UUID.serializeBinaryToWriter
    );
  }
  f = message.getSerialNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSoftwareVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRocTypeName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIotId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional UUID uuid = 1;
 * @return {?proto.rocsys.os.local.v2alpha.UUID}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.getUuid = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.UUID, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.UUID|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse} returns this
*/
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.setUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse} returns this
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.clearUuid = function() {
  return this.setUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.hasUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string serial_number = 2;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.getSerialNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse} returns this
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.setSerialNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string software_version = 3;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.getSoftwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse} returns this
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.setSoftwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string roc_type_name = 4;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.getRocTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse} returns this
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.setRocTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string iot_id = 5;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.getIotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.RocInfoResponse} returns this
 */
proto.rocsys.os.local.v2alpha.RocInfoResponse.prototype.setIotId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.EchoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.EchoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.EchoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.EchoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.EchoRequest}
 */
proto.rocsys.os.local.v2alpha.EchoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.EchoRequest;
  return proto.rocsys.os.local.v2alpha.EchoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.EchoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.EchoRequest}
 */
proto.rocsys.os.local.v2alpha.EchoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.EchoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.EchoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.EchoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.EchoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.EchoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.EchoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.EchoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.EchoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.EchoResponse}
 */
proto.rocsys.os.local.v2alpha.EchoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.EchoResponse;
  return proto.rocsys.os.local.v2alpha.EchoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.EchoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.EchoResponse}
 */
proto.rocsys.os.local.v2alpha.EchoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.EchoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.EchoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.EchoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.EchoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.DockBlockingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    acdCycleUuid: (f = msg.getAcdCycleUuid()) && proto.rocsys.os.local.v2alpha.UUID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingRequest}
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.DockBlockingRequest;
  return proto.rocsys.os.local.v2alpha.DockBlockingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingRequest}
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.UUID;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.UUID.deserializeBinaryFromReader);
      msg.setAcdCycleUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.DockBlockingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcdCycleUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.UUID.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID acd_cycle_uuid = 1;
 * @return {?proto.rocsys.os.local.v2alpha.UUID}
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.prototype.getAcdCycleUuid = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.UUID, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.UUID|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingRequest} returns this
*/
proto.rocsys.os.local.v2alpha.DockBlockingRequest.prototype.setAcdCycleUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingRequest} returns this
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.prototype.clearAcdCycleUuid = function() {
  return this.setAcdCycleUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockBlockingRequest.prototype.hasAcdCycleUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  IS_TRANSITIONING: 2,
  PRECONDITION_NOT_MET: 3
};

/**
 * @return {proto.rocsys.os.local.v2alpha.DockBlockingResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.DockBlockingResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.DockBlockingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.DockBlockingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.toObject(includeInstance, f),
    isTransitioning: (f = msg.getIsTransitioning()) && proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.DockBlockingResponse;
  return proto.rocsys.os.local.v2alpha.DockBlockingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader);
      msg.setIsTransitioning(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.DockBlockingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload;
  return proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.DockBlockingResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.DockBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.IsTransitioning is_transitioning = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.getIsTransitioning = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.DockBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.clearIsTransitioning = function() {
  return this.setIsTransitioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.hasIsTransitioning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.DockBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockBlockingResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.DockAsyncRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    acdCycleUuid: (f = msg.getAcdCycleUuid()) && proto.rocsys.os.local.v2alpha.UUID.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncRequest}
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.DockAsyncRequest;
  return proto.rocsys.os.local.v2alpha.DockAsyncRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncRequest}
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.UUID;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.UUID.deserializeBinaryFromReader);
      msg.setAcdCycleUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.DockAsyncRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAcdCycleUuid();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.UUID.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID acd_cycle_uuid = 1;
 * @return {?proto.rocsys.os.local.v2alpha.UUID}
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.prototype.getAcdCycleUuid = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.UUID} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.UUID, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.UUID|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncRequest} returns this
*/
proto.rocsys.os.local.v2alpha.DockAsyncRequest.prototype.setAcdCycleUuid = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncRequest} returns this
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.prototype.clearAcdCycleUuid = function() {
  return this.setAcdCycleUuid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockAsyncRequest.prototype.hasAcdCycleUuid = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  IS_TRANSITIONING: 2,
  PRECONDITION_NOT_MET: 3
};

/**
 * @return {proto.rocsys.os.local.v2alpha.DockAsyncResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.DockAsyncResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.DockAsyncResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.DockAsyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.toObject(includeInstance, f),
    isTransitioning: (f = msg.getIsTransitioning()) && proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.DockAsyncResponse;
  return proto.rocsys.os.local.v2alpha.DockAsyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader);
      msg.setIsTransitioning(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.DockAsyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload;
  return proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.DockAsyncResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.DockAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.IsTransitioning is_transitioning = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.getIsTransitioning = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.DockAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.clearIsTransitioning = function() {
  return this.setIsTransitioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.hasIsTransitioning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.DockAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.DockAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.DockAsyncResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UndockBlockingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingRequest}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UndockBlockingRequest;
  return proto.rocsys.os.local.v2alpha.UndockBlockingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingRequest}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UndockBlockingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockBlockingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  IS_TRANSITIONING: 2,
  PRECONDITION_NOT_MET: 3
};

/**
 * @return {proto.rocsys.os.local.v2alpha.UndockBlockingResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.UndockBlockingResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.UndockBlockingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UndockBlockingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.toObject(includeInstance, f),
    isTransitioning: (f = msg.getIsTransitioning()) && proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UndockBlockingResponse;
  return proto.rocsys.os.local.v2alpha.UndockBlockingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader);
      msg.setIsTransitioning(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UndockBlockingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload;
  return proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.UndockBlockingResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.UndockBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.IsTransitioning is_transitioning = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.getIsTransitioning = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.UndockBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.clearIsTransitioning = function() {
  return this.setIsTransitioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.hasIsTransitioning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.UndockBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.UndockBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.UndockBlockingResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UndockAsyncRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncRequest}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UndockAsyncRequest;
  return proto.rocsys.os.local.v2alpha.UndockAsyncRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncRequest}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UndockAsyncRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockAsyncRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  IS_TRANSITIONING: 2,
  PRECONDITION_NOT_MET: 3
};

/**
 * @return {proto.rocsys.os.local.v2alpha.UndockAsyncResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.UndockAsyncResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.UndockAsyncResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UndockAsyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.toObject(includeInstance, f),
    isTransitioning: (f = msg.getIsTransitioning()) && proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UndockAsyncResponse;
  return proto.rocsys.os.local.v2alpha.UndockAsyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader);
      msg.setIsTransitioning(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UndockAsyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload;
  return proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.UndockAsyncResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.UndockAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.IsTransitioning is_transitioning = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.getIsTransitioning = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.UndockAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.clearIsTransitioning = function() {
  return this.setIsTransitioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.hasIsTransitioning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.UndockAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.UndockAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.UndockAsyncResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.HaltRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.HaltRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.HaltRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.HaltRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.HaltRequest}
 */
proto.rocsys.os.local.v2alpha.HaltRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.HaltRequest;
  return proto.rocsys.os.local.v2alpha.HaltRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.HaltRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.HaltRequest}
 */
proto.rocsys.os.local.v2alpha.HaltRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.HaltRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.HaltRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.HaltRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.HaltRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.HaltResponse.oneofGroups_ = [[1,3,4]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  PRECONDITION_NOT_MET: 3,
  UNKNOWN: 4
};

/**
 * @return {proto.rocsys.os.local.v2alpha.HaltResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.HaltResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.HaltResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.HaltResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.HaltResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.HaltResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.HaltResponse.Payload.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f),
    unknown: (f = msg.getUnknown()) && proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.HaltResponse;
  return proto.rocsys.os.local.v2alpha.HaltResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.HaltResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.HaltResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.HaltResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.HaltResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.HaltResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.HaltResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.HaltResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.HaltResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.HaltResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.HaltResponse.Payload;
  return proto.rocsys.os.local.v2alpha.HaltResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.HaltResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.HaltResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.HaltResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.HaltResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.HaltResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.HaltResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.HaltResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.HaltResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse} returns this
*/
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.HaltResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse} returns this
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse} returns this
*/
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.HaltResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse} returns this
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Issue.Unknown unknown = 4;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.getUnknown = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.Unknown} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.Unknown, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.Unknown|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse} returns this
*/
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.HaltResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.HaltResponse} returns this
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.HaltResponse.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AbortRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AbortRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AbortRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AbortRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AbortRequest}
 */
proto.rocsys.os.local.v2alpha.AbortRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AbortRequest;
  return proto.rocsys.os.local.v2alpha.AbortRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AbortRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AbortRequest}
 */
proto.rocsys.os.local.v2alpha.AbortRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AbortRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AbortRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AbortRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AbortRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.AbortResponse.oneofGroups_ = [[1,3,4]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  PRECONDITION_NOT_MET: 3,
  UNKNOWN: 4
};

/**
 * @return {proto.rocsys.os.local.v2alpha.AbortResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.AbortResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.AbortResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AbortResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AbortResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AbortResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.AbortResponse.Payload.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f),
    unknown: (f = msg.getUnknown()) && proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AbortResponse;
  return proto.rocsys.os.local.v2alpha.AbortResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AbortResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.AbortResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AbortResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AbortResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AbortResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AbortResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.AbortResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AbortResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AbortResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AbortResponse.Payload;
  return proto.rocsys.os.local.v2alpha.AbortResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AbortResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AbortResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AbortResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.AbortResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.AbortResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AbortResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AbortResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AbortResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.AbortResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.AbortResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Issue.Unknown unknown = 4;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.getUnknown = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.Unknown} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.Unknown, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.Unknown|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.AbortResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AbortResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AbortResponse.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.StateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.StateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.StateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.StateRequest}
 */
proto.rocsys.os.local.v2alpha.StateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.StateRequest;
  return proto.rocsys.os.local.v2alpha.StateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.StateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.StateRequest}
 */
proto.rocsys.os.local.v2alpha.StateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.StateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.StateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.StateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.StateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.StateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.StateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.rocsys.os.local.v2alpha.RocState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.StateResponse}
 */
proto.rocsys.os.local.v2alpha.StateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.StateResponse;
  return proto.rocsys.os.local.v2alpha.StateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.StateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.StateResponse}
 */
proto.rocsys.os.local.v2alpha.StateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.RocState;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.RocState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.StateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.StateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.StateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.RocState.serializeBinaryToWriter
    );
  }
};


/**
 * optional RocState state = 1;
 * @return {?proto.rocsys.os.local.v2alpha.RocState}
 */
proto.rocsys.os.local.v2alpha.StateResponse.prototype.getState = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.RocState} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.RocState, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.RocState|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.StateResponse} returns this
*/
proto.rocsys.os.local.v2alpha.StateResponse.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.StateResponse} returns this
 */
proto.rocsys.os.local.v2alpha.StateResponse.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.StateResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest;
  return proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  IS_TRANSITIONING: 2,
  PRECONDITION_NOT_MET: 3,
  UNKNOWN: 4
};

/**
 * @return {proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.toObject(includeInstance, f),
    isTransitioning: (f = msg.getIsTransitioning()) && proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f),
    unknown: (f = msg.getUnknown()) && proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse;
  return proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader);
      msg.setIsTransitioning(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload;
  return proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.IsTransitioning is_transitioning = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.getIsTransitioning = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.clearIsTransitioning = function() {
  return this.setIsTransitioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.hasIsTransitioning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Issue.Unknown unknown = 4;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.getUnknown = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.Unknown} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.Unknown, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.Unknown|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverBlockingResponse.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest;
  return proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  IS_TRANSITIONING: 2,
  PRECONDITION_NOT_MET: 3,
  UNKNOWN: 4
};

/**
 * @return {proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.toObject(includeInstance, f),
    isTransitioning: (f = msg.getIsTransitioning()) && proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f),
    unknown: (f = msg.getUnknown()) && proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse;
  return proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.rocsys.os.local.v2alpha.Issue.IsTransitioning;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.deserializeBinaryFromReader);
      msg.setIsTransitioning(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getIsTransitioning();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.rocsys.os.local.v2alpha.Issue.IsTransitioning.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload;
  return proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.IsTransitioning is_transitioning = 2;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.getIsTransitioning = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.IsTransitioning, 2));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.IsTransitioning|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.setIsTransitioning = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.clearIsTransitioning = function() {
  return this.setIsTransitioning(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.hasIsTransitioning = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Issue.Unknown unknown = 4;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.getUnknown = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.Unknown} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.Unknown, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.Unknown|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
*/
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse} returns this
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.AutoRecoverAsyncResponse.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest;
  return proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.oneofGroups_ = [[1,3,4]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  PRECONDITION_NOT_MET: 3,
  UNKNOWN: 4
};

/**
 * @return {proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f),
    unknown: (f = msg.getUnknown()) && proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse;
  return proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload;
  return proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} returns this
*/
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} returns this
*/
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Issue.Unknown unknown = 4;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.getUnknown = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.Unknown} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.Unknown, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.Unknown|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} returns this
*/
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.ConfirmRecoveryResponse.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest;
  return proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.oneofGroups_ = [[1,3,4]];

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  OK: 1,
  PRECONDITION_NOT_MET: 3,
  UNKNOWN: 4
};

/**
 * @return {proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.ResponseCase}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.getResponseCase = function() {
  return /** @type {proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: (f = msg.getOk()) && proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.toObject(includeInstance, f),
    preconditionNotMet: (f = msg.getPreconditionNotMet()) && proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.toObject(includeInstance, f),
    unknown: (f = msg.getUnknown()) && proto.rocsys.os.local.v2alpha.Issue.Unknown.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse;
  return proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.deserializeBinaryFromReader);
      msg.setOk(value);
      break;
    case 3:
      var value = new proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.deserializeBinaryFromReader);
      msg.setPreconditionNotMet(value);
      break;
    case 4:
      var value = new proto.rocsys.os.local.v2alpha.Issue.Unknown;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.Issue.Unknown.deserializeBinaryFromReader);
      msg.setUnknown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.serializeBinaryToWriter
    );
  }
  f = message.getPreconditionNotMet();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet.serializeBinaryToWriter
    );
  }
  f = message.getUnknown();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.rocsys.os.local.v2alpha.Issue.Unknown.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload;
  return proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OperationResult result = 1;
 * @return {!proto.rocsys.os.local.v2alpha.OperationResult}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.prototype.getResult = function() {
  return /** @type {!proto.rocsys.os.local.v2alpha.OperationResult} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.rocsys.os.local.v2alpha.OperationResult} value
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload} returns this
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Payload ok = 1;
 * @return {?proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.getOk = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.Payload|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} returns this
*/
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.setOk = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.clearOk = function() {
  return this.setOk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.hasOk = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Issue.PreconditionNotMet precondition_not_met = 3;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.getPreconditionNotMet = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet, 3));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.PreconditionNotMet|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} returns this
*/
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.setPreconditionNotMet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.clearPreconditionNotMet = function() {
  return this.setPreconditionNotMet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.hasPreconditionNotMet = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Issue.Unknown unknown = 4;
 * @return {?proto.rocsys.os.local.v2alpha.Issue.Unknown}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.getUnknown = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.Issue.Unknown} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.Issue.Unknown, 4));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.Issue.Unknown|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} returns this
*/
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.setUnknown = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse} returns this
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.clearUnknown = function() {
  return this.setUnknown(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.ReleaseToOperationalResponse.prototype.hasUnknown = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.StatePlusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.StatePlusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusRequest}
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.StatePlusRequest;
  return proto.rocsys.os.local.v2alpha.StatePlusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.StatePlusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusRequest}
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.StatePlusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.StatePlusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StatePlusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.rocsys.os.local.v2alpha.StatePlusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rocsys.os.local.v2alpha.StatePlusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: (f = msg.getState()) && proto.rocsys.os.local.v2alpha.RocState.toObject(includeInstance, f),
    internalInfo: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusResponse}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rocsys.os.local.v2alpha.StatePlusResponse;
  return proto.rocsys.os.local.v2alpha.StatePlusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rocsys.os.local.v2alpha.StatePlusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusResponse}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.rocsys.os.local.v2alpha.RocState;
      reader.readMessage(value,proto.rocsys.os.local.v2alpha.RocState.deserializeBinaryFromReader);
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rocsys.os.local.v2alpha.StatePlusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rocsys.os.local.v2alpha.StatePlusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.rocsys.os.local.v2alpha.RocState.serializeBinaryToWriter
    );
  }
  f = message.getInternalInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional RocState state = 1;
 * @return {?proto.rocsys.os.local.v2alpha.RocState}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.getState = function() {
  return /** @type{?proto.rocsys.os.local.v2alpha.RocState} */ (
    jspb.Message.getWrapperField(this, proto.rocsys.os.local.v2alpha.RocState, 1));
};


/**
 * @param {?proto.rocsys.os.local.v2alpha.RocState|undefined} value
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusResponse} returns this
*/
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusResponse} returns this
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.hasState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string internal_info = 3;
 * @return {string}
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.getInternalInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rocsys.os.local.v2alpha.StatePlusResponse} returns this
 */
proto.rocsys.os.local.v2alpha.StatePlusResponse.prototype.setInternalInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.OperationResult = {
  OPERATION_RESULT_UNSPECIFIED: 0,
  OPERATION_RESULT_SUCCESS: 1,
  OPERATION_RESULT_NO_SOCKET_DETECTED: 2,
  OPERATION_RESULT_ABORTED: 3,
  OPERATION_RESULT_HALTED: 4,
  OPERATION_RESULT_MAX_DOCKING_ATTEMPTS_REACHED: 5,
  OPERATION_RESULT_MAX_UNDOCKING_ATTEMPTS_REACHED: 6,
  OPERATION_RESULT_SOCKET_OUTSIDE_MATING_SPACE: 7,
  OPERATION_RESULT_GENERAL_ISSUE: 20
};

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.State = {
  STATE_UNSPECIFIED: 0,
  STATE_MAINTENANCE: 1,
  STATE_IRRECOVERABLE: 2,
  STATE_RECOVERABLE: 3,
  STATE_OPERATIONAL: 4,
  STATE_HARDWARE_SAFETY: 5,
  STATE_RECOVERING: 6
};

/**
 * @enum {number}
 */
proto.rocsys.os.local.v2alpha.DetailedState = {
  DETAILED_STATE_UNSPECIFIED: 0,
  DETAILED_STATE_IRRECOVERABLE: 1,
  DETAILED_STATE_RECOVERABLE_AUTORECOVERED: 2,
  DETAILED_STATE_RECOVERABLE_STORED: 3,
  DETAILED_STATE_OPERATIONAL_CONNECTED: 4,
  DETAILED_STATE_OPERATIONAL_MOVING: 5,
  DETAILED_STATE_OPERATIONAL_DOCKING: 6,
  DETAILED_STATE_OPERATIONAL_UNDOCKING: 7,
  DETAILED_STATE_OPERATIONAL_STORED: 8,
  DETAILED_STATE_HARDWARE_SAFETY: 9,
  DETAILED_STATE_RECOVERING_AUTORECOVER: 10
};

goog.object.extend(exports, proto.rocsys.os.local.v2alpha);
