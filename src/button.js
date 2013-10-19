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

        init: function() {
            console.info('Button.init call');
        },

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

        render: function() {
            var self = this, main = self.main;

            if ( self.rendered ) return;

            self.rendered = true;

            // if ( !self.options.main ) {
            //     document.body.appendChild( main );
            // }

            if ( !self.onTouch ) {
                self.onTouch = dispatchTouchEvent.bind( self );
            }
            main.addEventListener( 'touchstart', self.onTouch );
            main.addEventListener( 'touchend', self.onTouch );

            if ( self.content ) {
                main.innerHTML = self.content;
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
                DOM.addClass( this.main, 'sui-focus' );
                break;
            case 'touchend':
                DOM.removeClass( this.main, 'sui-focus' );
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
