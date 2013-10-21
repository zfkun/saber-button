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
            if ( !this.onTouch ) {
                this.onTouch = dispatchTouchEvent.bind( this );
                this.main.addEventListener( 'touchstart', this.onTouch );
                this.main.addEventListener( 'touchend', this.onTouch );
            }
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

        /**
         * 重新渲染视图
         * 
         * 首次渲染时, 不传入 changes 参数
         * @param {Object=} changes 变更过的属性的集合
         * @override
         */
        repaint: function( changes ) {
            // if ( !this.rendered ) return;
            var main = this.main;

            // 首次渲染时, changes 不传入
            // 非首次渲染, changes 必须传入
            // see `Button#render` and `Control#setProperties`
            if ( !changes ) {
                if ( this.hasOwnProperty( 'height' ) ) {
                    main.style.height = this.height + 'px';
                    main.style.lineHeight = this.height + 'px';
                }

                if ( this.hasOwnProperty( 'width' ) ) {
                    main.style.width = this.width + 'px';
                }

                main.innerHTML = this.content;

                return;
            }
            else {
                this.parent( 'repaint', changes );

                if ( changes.hasOwnProperty( 'height' ) ) {
                    main.style.height = this.height + 'px';
                    main.style.lineHeight = this.height + 'px';
                }

                if ( changes.hasOwnProperty( 'width' ) ) {
                    main.style.width = this.width + 'px';
                }

                if ( changes.hasOwnProperty( 'content' ) ) {
                    main.innerHTML = this.content;
                }
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
