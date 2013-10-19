/**
 * Saber
 * 
 * @file 按钮控件
 * @author zfkun(zfkun@msn.com)
 */

define( function ( require ) {

    var DOM = require( 'saber-dom' );
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

        init: function() {},

        /**
         * 创建控件主元素
         * 
         * @param {Object} options 构造函数传入的配置参数
         * @return {HTMLElement}
         * @override
         */
        createMain: function() {
            return document.createElement('BUTTON');
        },

        repaint: function() {
            var main = this.main;

            if ( !this.onTouch ) {
                this.onTouch = dispatchTouchEvent.bind( this );
            }
            main.addEventListener( 'touchstart', this.onTouch );
            main.addEventListener( 'touchend', this.onTouch );

            if ( this.content ) {
                main.innerHTML = this.content;
            }
        },

        /**
         * 设置内容
         *
         * @param {string} content 要设置的内容.
         * @public
         */
        setContent: function ( content ) {
            this.setProperties({ 'content': content });
        }

    };

    Control.inherits( Button );


    function dispatchTouchEvent( ev ) {
        var type = ev.type;

        switch ( type ) {
            case 'touchstart':
                this.addState( 'focus' );
                break;
            case 'touchend':
                this.removeState( 'focus' );
                // FIXME : 测试用，待 saber-tap 引入后移除
                this.emit( 'click' );
                break;
            case 'tap':
                this.emit( 'click' );
                break;
        }
    }

    return Button;
});
