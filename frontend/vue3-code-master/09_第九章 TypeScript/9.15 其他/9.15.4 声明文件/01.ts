// jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.

declare var jQuery: (selector: string) => any;

jQuery('#foo');

