(function( $ ){
    $( document ).ready( function() {
		$( '.cp_featured_widget_course_link .apply-button.apply-button-details' ).on( 'click', function( e ) {
			var target = e.currentTarget;

			if ( $( target ).attr( 'data-link' ) ) {
				window.location.href = $( target ).attr( 'data-link' );
			}
		} );
    
    } );
})( jQuery );