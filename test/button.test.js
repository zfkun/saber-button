define(function() {

	Control = require( 'saber-control' );
    Button = require( 'saber-button' );

    describe( 'Button', function() {
        // TODO
        
        describe( 'should create instance of Button' , function() {

        	b1 = new Button({
        		onBeforeinit: function() {
        			console.info( 'beforeinit', arguments );
        		},
        		onAfterinit: function() {
        			console.info( 'afterinit', arguments );
        		},
        	});
        	b1.on( 'enable', function() {
        		console.info( 'enable', arguments );
        	}).on( 'disable', function() {
        		console.info( 'disable', arguments );
        	});

        	b1.enable();
        	b1.disable();
        	b1.enable();


        	console.info( b1 );

        	// it().toEqual(  );

        });
    });

});
