Ext.define('School.controller.StudentMaster', {
    extend: 'Ext.app.Controller',
    models: ['School.model.Student'],
    views: ['School.view.StudentMaster'],

    refs: [{
        ref: 'studentMasterForm',
        selector: 'viewport > container > StudentMaster'
    }],

    init: function () {
        this.control({

            'viewport > container > StudentMaster button[itemId=btnCreate]': {
                click: this.onCreateClick
            },
            'viewport > container > StudentMaster button[itemId=btnLoad]': {
                click: this.onLoadClick
            },
            'viewport > container > StudentMaster button[itemId=btnUpdate]': {
                click: this.onUpdateClick
            },
            'viewport > container > StudentMaster button[itemId=btnDelete]': {
                click: this.onDeleteClick
            },
            'viewport > container > StudentMaster button[itemId=btnReset]': {
                click: this.onResetClick
            },
            'viewport > container > StudentMaster button[itemId=btnClear]': {
                click: this.onClearClick
            }
        });
    },

    onResetClick: function () {
        this.getStudentMasterForm().getForm().reset();
    },

    onClearClick: function () {
        this.getStudentMasterForm().clearForm();
    },

    onLoadClick: function () {

        var existingStudent = Ext.ModelMgr.getModel('School.model.Student');

        existingStudent.load(1, {
            scope: this, //controller would be accessible inside load
            failure: function (record, operation) {
                Ext.Msg.alert('Status', 'Service request faild.');
            },
            success: function (record, operation) { //do something if the load succeeded
                try {
                    this.getStudentMasterForm().loadRecord(record);
                    Ext.Msg.alert('Status', 'Records loaded successfully.');

                }
                catch (ex) {
                    Ext.Msg.alert('Status', 'Invalid data in server response: ' + ex.Message);
                }

            }
        });

    }

});

