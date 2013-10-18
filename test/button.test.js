define(function() {

	Control = require( 'saber-control' );
    Button = require( 'saber-button' );

    describe( 'Button', function() {
        // TODO
        
        describe( 'should create instance of Button' , function() {

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

            // b1._events.beforeinit[0]();


        	// console.info( b1 );

        	// it().toEqual(  );

        });
    });

});
