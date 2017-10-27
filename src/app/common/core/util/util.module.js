'use strict';

import CrudTable from './crud-table/crud-table.module';
import Material from './material/material.module';
import FormsComponents from './forms/forms.module';
import Help from './help/help.module';
import CComponents from './c-components/c.components.module';

const Components = angular
    .module('app.util', [
        CrudTable,
        Material,
        FormsComponents,
        Help,
        CComponents
    ])
    .name;

export default Components;
