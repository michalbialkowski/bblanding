$('form input').on('change', function() {
	if ($('#form_field_11').is(':checked')) {
		$('#collapse__1').addClass('show');
	} else {
		$('#collapse__1').removeClass('show');
	}

	if ($('#form_field_20').is(':checked')) {
		$('#collapse__2').addClass('show');
	} else {
		$('#collapse__2').removeClass('show');
	}

	if ($('#form_field_25').is(':checked')) {
		$('#collapse__3').addClass('show');
	} else {
		$('#collapse__3').removeClass('show');
	}
});

function validateForm() {
	let errors = 1;
	let invalids = [];
	let notices = [];
	let scrolls = [];
	
	if ($('#form_field_1').val() == '') {
		errors++;
		notices.push('#form_field_1');
		scrolls.push('#form_question_1');
	}
	
	if ($('#form_field_2').val() == '') {
		errors++;
		notices.push('#form_field_2');
		scrolls.push('#form_question_1');
	}
	
	if ($('#form_field_3').val() == '') {
		errors++;
		notices.push('#form_field_3');
		scrolls.push('#form_question_1');
	}
	
	if ($('#form_field_4').val() == '') {
		errors++;
		notices.push('#form_field_4');
		scrolls.push('#form_question_2');
	}
	
	if ($('#form_field_5').val() == '') {
		errors++;
		notices.push('#form_field_5');
		scrolls.push('#form_question_3');
	}
	
	if (
		$('#form_field_6').is(':not(:checked)') &&
		$('#form_field_7').is(':not(:checked)') &&
		$('#form_field_8').is(':not(:checked)')
	) {
		errors++;
		notices.push('#form_group_1');
		scrolls.push('#form_question_4');
	}
	
	if (
		$('#form_field_9').is(':not(:checked)') &&
		$('#form_field_10').is(':not(:checked)') &&
		$('#form_field_11').is(':not(:checked)')
	) {
		errors++;
		notices.push('#form_group_2');
		scrolls.push('#form_question_5');
	} 
	
	if ($('#form_field_11').is(':checked')) {
		if ($('#form_field_12').val() == '') {
			errors++;
			notices.push('#form_field_12');
			scrolls.push('#form_question_5');
		}
	}
	
	if ($('#form_field_13').val() == '') {
		errors++;
		notices.push('#form_field_13');
		scrolls.push('#form_question_6');
	}
	
	if ($('#form_field_14').val() == '') {
		errors++;
		notices.push('#form_field_14');
		scrolls.push('#form_question_7');
	}
	
	if (
		$('#form_field_15').is(':not(:checked)') &&
		$('#form_field_16').is(':not(:checked)') &&
		$('#form_field_17').is(':not(:checked)') &&
		$('#form_field_18').is(':not(:checked)') &&
		$('#form_field_19').is(':not(:checked)') &&
		$('#form_field_20').is(':not(:checked)')
	) {
		errors++;
		notices.push('#form_group_3');
		scrolls.push('#form_question_8');
	} 
	
	if ($('#form_field_20').is(':checked')) {
		if ($('#form_field_21').val() == '') {
			errors++;
			notices.push('#form_field_21');
			scrolls.push('#form_question_8');
		}
	}
	
	if (
		$('#form_field_22').is(':not(:checked)') &&
		$('#form_field_23').is(':not(:checked)') &&
		$('#form_field_24').is(':not(:checked)') &&
		$('#form_field_25').is(':not(:checked)')
	) {
		errors++;
		notices.push('#form_group_4');
		scrolls.push('#form_question_9');
	} 
	
	if ($('#form_field_25').is(':checked')) {
		if ($('#form_field_26').val() == '') {
			errors++;
			notices.push('#form_field_26');
			scrolls.push('#form_question_9');
		}
	}
	
	if (
		$('#form_field_27').is(':not(:checked)') &&
		$('#form_field_28').is(':not(:checked)') &&
		$('#form_field_29').is(':not(:checked)') &&
		$('#form_field_30').is(':not(:checked)')
	) {
		errors++;
		notices.push('#form_group_5');
		scrolls.push('#form_question_10');
	} 
	
	if ($('#form_field_31').val() == '') {
		errors++;
		notices.push('#form_field_31');
		scrolls.push('#form_field_31');
	}
	
	if ($('#form_field_32').val() == '') {
		errors++;
		notices.push('#form_field_32');
		scrolls.push('#form_field_32');
	}
	
	if ($('#form_field_33').val() == '') {
		errors++;
		notices.push('#form_field_33');
		scrolls.push('#form_field_33');
	}
	
	if ($('#form_field_34').val() == '') {
		errors++;
		notices.push('#form_field_34');
		scrolls.push('#form_field_34');
	}
	
	if (
		$('#form_field_35').is(':not(:checked)')
	) {
		errors++;
		notices.push('#form_group_6');
		scrolls.push('#form_group_6');
	} 
	
	
	for (let invalid of invalids) {
		$(invalid).addClass('is-invalid');
	}
	
	$('.is-invalid').removeClass('is-invalid');
	for (let notice of notices) {
		$(notice).addClass('is-invalid');
	}
	
		
	first_scroll = scrolls[0];
	$('body').scrollTo(first_scroll, 1000, {offset: -5});
	
	if (errors > 0) {
		return false;
	} else if (errors == 0) {
		return true;
	}
}

