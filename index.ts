import 'reflect-metadata';
// Decorators
import Inject from './src/decorators/inject';
import Injectable from './src/decorators/injectable';
import Optional from './src/decorators/optional';
import Scoped from './src/decorators/scoped';
import Singleton from './src/decorators/singleton';
import Transient from './src/decorators/transient';
import Override from './src/decorators/override';
// enums
import FACTORY_AS from './src/enums/factory-as';
import FACTORY_TYPES from './src/enums/factory-types';
import METADATA_KEYS from './src/enums/metadata-keys';
// storage
import storage from './src/storage';

export { storage, Inject, Injectable, Optional, Scoped, Singleton, Transient, Override, FACTORY_AS, FACTORY_TYPES, METADATA_KEYS };
