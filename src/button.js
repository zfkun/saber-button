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

        initialize: function() {
            console.info( 'Button inited', this.superClass );
        }

    };

    Control.inherits( Button );

    return Button;
});
