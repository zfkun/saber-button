define(function() {

    Control = require( 'saber-control' );
    Button = require( 'saber-button' );

    describe( 'Button', function() {
        
        describe( 'Public API' , function() {

            b1 = new Button({
                content: 'test',
                onBeforeinit: function() {
                    console.info( 'beforeinit', arguments );
                },
                onAfterinit: function() {
                    console.info( 'afterinit', arguments );
                },
            }).on( 'enable', function() {
                console.info( this.id, 'enable', arguments );
            }).on( 'disable', function() {
                console.info( this.id, 'disable', arguments );
            });

            b1.appendTo( document.body );

            b2 = new Button({
                id: 'b2',
                content: 'on/off b1'
            }).on( 'click', function() {
                b1[ b1.isDisabled() ? 'enable' : 'disable']();
            });

            b2.render();



            it( '`new`', function () {
                expect( b1 instanceof Button ).toEqual( true );
            });



            it( '`get`', function () {
                var b = new Button({
                    content: '.main',
                    foo: 'foo',
                    bar: [1, 2, 3]
                });
                b.set( 'saber', 'yes' );
                expect( b.get( 'id' ) === b.id ).toBeTruthy();
                expect( b.get( 'main' ) === b.main ).toBeTruthy();
                expect( b.get( 'disabled' ) === b.disabled ).toBeTruthy();
                expect( b.get( 'hidden' ) === b.hidden ).toBeTruthy();
                expect( b.get( 'options' ) === b.options ).toBeTruthy();
                expect( b.get( 'content' ) === b.content ).toBeTruthy();
                expect(
                    b.foo === b.options.foo && b.get( 'foo' ) === b.foo
                ).toBeTruthy();
                expect(
                    b.bar === b.options.bar && b.get( 'bar' ) === b.bar
                ).toBeTruthy();
                expect( b.get( 'saber' ) === 'yes' ).toBeTruthy();
            });

            it( '`appendTo`', function () {
                var b = new Button({ content: '.appendTo' });
                var wrap = document.createElement( 'div' );
                wrap.style.cssText = 'border: 1px solid red; display: inline;';
                document.body.appendChild( wrap );
                b.appendTo( wrap );

                expect( wrap.contains( b.main ) ).toEqual( true );
            });

        });
    });

});
