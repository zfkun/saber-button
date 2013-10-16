/**
 * Saber
 * 
 * @file 按钮控件
 * @author zfkun(zfkun@msn.com)
 */

define( function ( require ) {

    var Control = require( 'saber-control' );

    /**
     * 按钮控件
     * 
     * @extends module:Control
     * @requires Control
     * @exports Button
     */
    var Button = function() {
        Button.superClass.constructor.apply( this, arguments );
    };

    Button.prototype = {

        /**
         * 控件类型标识
         * 
         * @type {string}
         * @private
         */
        type: 'Button',

        init: function() {
            console.info('Button.init call');
        },

        render: function() {
            console.info( 'Button.render call' );
            // this.parent( 'render' );
        }

    };

    Control.inherits( Button );

    return Button;
});
