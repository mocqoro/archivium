// view.js
function toggleElementVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.visibility == "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}

function toggleElementsVisibility(ids) {
	for (var i = 0; i < ids.length; i++) {
		toggleElementVisibility(ids[i]);
	}
}

function toggleElementDisplay(id) {
    var element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggleElementsDisplay(ids) {
    for (var i = 0; i < ids.length; i++) {
		toggleElementDisplay(ids[i]);
	}
}

function toggleElementDisplayInlineBlock(id) {
    var element = document.getElementById(id);
    if (element.style.display == "none") {
        element.style.display = "inline-block";
    } else {
        element.style.display = "none";
    }
}

function toggleElementsDisplayInlineBlock(ids) {
	for (var i = 0; i < ids.length; i++) {
		toggleElementsDisplayInlineBlock(ids[i]);
	}	
}

// sidebar.js
function openSideBar(id) {
    console.log(id);
    document.getElementById(id).style.width = "250px";
}

function closeSideBar(id) {
    document.getElementById(id).style.width = "0px";
}

// form.js
function br() {
	return document.createElement("br");
}

function addTextFieldToForm() {
	var name = document.getElementById("new_field_name").value;
	var text = document.getElementById("new_field_text").value;
	var fields_div = document.getElementById("fields_div");
	var div = document.createElement("div");
	div.id = "data_feilds[" + (fields_div.childElementCount) + "]";
	var hr = document.createElement("hr");
	hr.classList.add("hr-wide");
	
	var time = document.createElement("div");
	time.id = "time_frame_span[" + (fields_div.childElementCount) +"]"
	time.style.cssText = "display: none";
	
	var time_start_label = document.createElement("label");
	time_start_label.innerHTML = "Start:\xa0";
	var time_start = document.createElement("input");
	time_start.name = "obj[data_feilds_time_start][][0]"
	time_start.classList.add("input");
	time_start.classList.add("input-sm");
	time_start.type = "number";
	
	var time_end_label = document.createElement("label");
	time_end_label.innerHTML = "End:\xa0\xa0\xa0";
	var time_end = document.createElement("input");
	time_end.name = "obj[data_feilds_time_end][][0]"
	time_end.classList.add("input");
	time_end.classList.add("input-sm");
	time_end.type = "number";
	
	var type = document.createElement("input");
	type.value = "text";
	type.name = "obj[data_feilds_type][]";
	type.type = "hidden";
	
	var input_label = document.createElement("label");
	input_label.innerHTML = "Name";
	var input = document.createElement("input");
	input.value = name;
	input.name = "obj[data_feilds_name][]";
	input.classList.add("input");
	
	var textarea_label = document.createElement("label");
	textarea_label.innerHTML = "Text";
	var textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.name = "obj[data_feilds_value][][0]";
	textarea.classList.add("textarea");
	
	var checkbox_label = document.createElement("label");
	checkbox_label.innerHTML = "Enable time frames";
	
	var checkbox_default = document.createElement("input");
	checkbox_default.type = "hidden";
	checkbox_default.name = "obj[data_feilds_time][]";
	checkbox_default.value = "off";
	
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "obj[data_feilds_time][]";
	checkbox.value = "on";
	checkbox.setAttribute("onclick", "toggleElementDisplay('time_frame_span[" + (fields_div.childElementCount) + "]');");
	
	time.appendChild(time_start_label);
	time.appendChild(time_start);
	time.appendChild(br());
	time.appendChild(time_end_label);
	time.appendChild(time_end);
	time.appendChild(br());
	
	div.appendChild(hr);
	div.appendChild(br());
	div.appendChild(time);
	div.appendChild(type);
	div.appendChild(input_label);
	div.appendChild(br());
	div.appendChild(input);
	div.appendChild(br());
	div.appendChild(textarea_label);
	div.appendChild(br());
	div.appendChild(textarea);
	div.appendChild(br());
	div.appendChild(checkbox_label);
	div.appendChild(br());
	div.appendChild(checkbox_default);
	div.appendChild(checkbox);
	div.appendChild(br());
	fields_div.appendChild(div);
}

function addLinkFieldToForm() {
	var name = document.getElementById("new_link_field_name").value;
	var form_select = document.getElementById("new_link_field_obj");
	var fields_div = document.getElementById("fields_div");
	var div = document.createElement("div");
	div.id = "data_feilds[" + (fields_div.childElementCount) + "]";
	var hr = document.createElement("hr");
	hr.classList.add("hr-wide");
	
	var type = document.createElement("input");
	type.value = "link";
	type.name = "obj[data_feilds_type][]"
	type.type = "hidden";
	
	var time = document.createElement("div");
	time.id = "time_frame_span[" + (fields_div.childElementCount) +"]"
	time.style.cssText = "display: none";
	
	var time_start_label = document.createElement("label");
	time_start_label.innerHTML = "Start:\xa0";
	var time_start = document.createElement("input");
	time_start.name = "obj[data_feilds_time_start][][0]"
	time_start.classList.add("input");
	time_start.classList.add("input-sm");
	time_start.type = "number";
	
	var time_end_label = document.createElement("label");
	time_end_label.innerHTML = "End:\xa0\xa0\xa0";
	var time_end = document.createElement("input");
	time_end.name = "obj[data_feilds_time_end][][0]"
	time_end.classList.add("input");
	time_end.classList.add("input-sm");
	time_end.type = "number";
	
	var input_label = document.createElement("label");
	input_label.innerHTML = "Name";
	var input = document.createElement("input");
	input.value = name;
	input.name = "obj[data_feilds_name][]"
	input.classList.add("input");
	
	var select_label = document.createElement("label");
	select_label.innerHTML = "Link";
	var select = document.createElement("select");
	select.name = "obj[data_feilds_value][][0]";
	select.classList.add("select");
	select.classList.add("select-wide");
	
	var checkbox_label = document.createElement("label");
	checkbox_label.innerHTML = "Enable time frames";
	
	var checkbox_default = document.createElement("input");
	checkbox_default.type = "hidden";
	checkbox_default.name = "obj[data_feilds_time][]";
	checkbox_default.value = "off";
	
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "obj[data_feilds_time][]";
	checkbox.value = "on";
	checkbox.setAttribute("onclick", "toggleElementDisplay('time_frame_span[" + (fields_div.childElementCount) + "]');");
	
	for (var i = 0; i < form_select.options.length; i++) {
		var option = document.createElement("option");
		option.text = form_select.options[i].text;
		option.value = form_select.options[i].value;
		option.selected = form_select.options[i].selected;
		
		select.appendChild(option);
	}
	
	time.appendChild(time_start_label);
	time.appendChild(time_start);
	time.appendChild(br());
	time.appendChild(time_end_label);
	time.appendChild(time_end);
	time.appendChild(br());
	
	div.appendChild(hr);
	div.appendChild(br());
	div.appendChild(time);
	div.appendChild(type);
	div.appendChild(input_label);
	div.appendChild(br());
	div.appendChild(input);
	div.appendChild(br());
	div.appendChild(select_label);
	div.appendChild(br());
	div.appendChild(select);
	div.appendChild(br());
	div.appendChild(checkbox_label);
	div.appendChild(br());
	div.appendChild(checkbox_default);
	div.appendChild(checkbox);
	div.appendChild(br());
	fields_div.appendChild(div);
}

function addFieldToForm(type) {
    var fields_div = document.getElementById("fields_div");
    
    var dataFeildId = (fields_div.childElementCount)-1;
    
    var data_feild = document.createElement("div");
    data_feild.id = "data_feilds[" + (dataFeildId) + "]";
    data_feild.classList.add("feild-frame");
    data_feild.classList.add("float-left");
    
    var data_header_span = document.createElement("div");
    data_header_span.id = "data_header_span[" + dataFeildId + "]";
    
    var hr = document.createElement("hr");
	hr.classList.add("size-fullwidth");
	
	var data_feild_type = document.createElement("input");
    data_feild_type.name = "obj[data_feilds_type][]";
    data_feild_type.type = "hidden";
    data_feild_type.value = type;
    
    var data_feild_name_label = document.createElement("label");
    data_feild_name_label.innerHTML = "Name";
    
    var data_feild_name = document.createElement("input");
    data_feild_name.name = "obj[data_feilds_name][]";
    data_feild_name.classList.add("input");
    data_feild_name.classList.add("size-fullwidth");
    
    var time_frames_div = document.createElement("div")
    time_frames_div.id = "time_frames[" + dataFeildId + "]"
    
    var time_frame = document.createElement("div");
    time_frame.id = "time_frame[" + dataFeildId + "][0]";
    time_frame.style.display = "block";
    
    var time_frame_span = document.createElement("div");
    time_frame_span.id = "time_frame_span[" + dataFeildId + "][0]";
    
    var previous_time_frame_button = document.createElement("input");
    previous_time_frame_button.type = "button";
    previous_time_frame_button.name = "commit";
    previous_time_frame_button.value = "Previous Timeframe";
    previous_time_frame_button.classList.add("btn");
    previous_time_frame_button.classList.add("size-halfwidth");
    previous_time_frame_button.classList.add("float-left");
    previous_time_frame_button.setAttribute("onclick", "previousTimeFrame(" + dataFeildId + ", 0);");
    
    var next_time_frame_button = document.createElement("input");
    next_time_frame_button.type = "button";
    next_time_frame_button.name = "commit";
    next_time_frame_button.value = "Next Timeframe";
    next_time_frame_button.classList.add("btn");
    next_time_frame_button.classList.add("size-halfwidth");
    next_time_frame_button.classList.add("float-left");
    next_time_frame_button.setAttribute("onclick", "nextTimeFrame(" + dataFeildId + ", 0);");
    
    var add_time_frame_button = document.createElement("input");
    add_time_frame_button.type = "button";
    add_time_frame_button.name = "commit";
    add_time_frame_button.value = "Add Timeframe";
    add_time_frame_button.classList.add("btn");
    add_time_frame_button.classList.add("size-fullwidth");
    add_time_frame_button.classList.add("float-left");
    add_time_frame_button.setAttribute("onclick", "addTimeFrame(" + dataFeildId + ", 0, '" + type + "');");
    
    var time_frame_id_text = document.createTextNode("Timeframe " + 1 + ":");
    
    var time_frame_time_group = document.createElement("div");
    time_frame_time_group.classList.add("group-micro");
    
    var time_frame_time_start_label = document.createElement("label");
    time_frame_time_start_label.innerHTML = "Start:\xa0";
    
    var time_frame_time_start = document.createElement("input");
    time_frame_time_start.name = "obj[data_feilds_time_start][][0]";
    time_frame_time_start.classList.add("input");
    time_frame_time_start.classList.add("input-sm");
    time_frame_time_start.type = "number";
    
    var time_frame_time_end_label = document.createElement("label");
    time_frame_time_end_label.innerHTML = "End:\xa0\xa0\xa0";
    
    var time_frame_time_end = document.createElement("input");
    time_frame_time_end.name = "obj[data_feilds_time_end][][0]";
    time_frame_time_end.classList.add("input");
    time_frame_time_end.classList.add("input-sm");
    time_frame_time_end.type = "number";

    if (type == "text") {
        var time_frame_value_label = document.createElement("label");
        time_frame_value_label.innerHTML = "Text"
        var time_frame_value = document.createElement("textarea");
        time_frame_value.name = "obj[data_feilds_value][][0]";
        time_frame_value.classList.add("textarea");
        time_frame_value.classList.add("textarea-vertical");
        time_frame_value.classList.add("size-fullwidth");
    } else if (type == "link") {
        var time_frame_value_label = document.createElement("label");
        time_frame_value_label.innerHTML = "Link"
        var time_frame_value = document.createElement("select");
        time_frame_value.name = "obj[data_feilds_value][][0]";
        time_frame_value.classList.add("select");
        time_frame_value.classList.add("size-fullwidth");
        
        var form_select = document.getElementById("new_link_field_obj");
        
        for (var i = 0; i < form_select.options.length; i++) {
    		var option = document.createElement("option");
    		option.text = form_select.options[i].text;
    		option.value = form_select.options[i].value;
    		
    		time_frame_value.appendChild(option);
        }
    }
    
    var data_footer_span = document.createElement("div");
    data_footer_span.id = "data_footer_span[" + dataFeildId + "]";
    
    var checkbox_label = document.createElement("label");
    checkbox_label.innerHTML = "Enable time frames";
    
    var time_frames_default = document.createElement("input");
    time_frames_default.type = "hidden";
    time_frames_default.name = "obj[data_feilds_time][]";
    time_frames_default.id = "obj_data_feilds_time_";
    time_frames_default.value = "off";
    
    var time_frames_checkbox = document.createElement("input");
    time_frames_checkbox.type = "checkbox";
    time_frames_checkbox.name = "obj[data_feilds_time][]";
    time_frames_checkbox.id = "obj_data_feilds_time_";
    time_frames_checkbox.value = "on";
    time_frames_checkbox.setAttribute("onclick", "toggleTimeFrames(" + dataFeildId + ", this.checked);");
    time_frames_checkbox.checked = true;
    
    data_header_span.appendChild(hr);
    data_header_span.appendChild(br());
    data_header_span.appendChild(data_feild_type);
    data_header_span.appendChild(data_feild_name_label);
    data_header_span.appendChild(br());
    data_header_span.appendChild(data_feild_name);
    data_header_span.appendChild(br());
    
    time_frame_time_group.appendChild(time_frame_time_start_label);
    time_frame_time_group.appendChild(time_frame_time_start);
    time_frame_time_group.appendChild(br());
    time_frame_time_group.appendChild(time_frame_time_end_label);
    time_frame_time_group.appendChild(time_frame_time_end);
    time_frame_time_group.appendChild(br());
    
    time_frame_span.appendChild(previous_time_frame_button);
    time_frame_span.appendChild(next_time_frame_button);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(add_time_frame_button);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(time_frame_id_text);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(time_frame_time_group);
    
    time_frame.appendChild(time_frame_span);
    time_frame.appendChild(time_frame_value_label);
    time_frame.appendChild(br());
    time_frame.appendChild(time_frame_value);
    time_frame.appendChild(br());
    
    time_frames_div.appendChild(time_frame);
    
    data_footer_span.appendChild(checkbox_label);
    data_footer_span.appendChild(br());
    data_footer_span.appendChild(time_frames_default);
    data_footer_span.appendChild(time_frames_checkbox);
    
    data_feild.appendChild(data_header_span);
    data_feild.appendChild(time_frames_div);
    data_feild.appendChild(data_footer_span);
    
    fields_div.insertBefore(data_feild, fields_div.children[fields_div.children.length-4]);
}

function getSelectOptions(hash) {
	return hash[document.getElementById('obj_universe_id').value];
}

function setOptions(selectId, options) {
	var select = document.getElementById(selectId);
	while (select.lastChild) {
	    select.removeChild(select.lastChild);
	}
	for (var i = 0; i < options.length; i++) {
		var option = document.createElement("option");
		option.text = options[i][0];
		option.value = options[i][1];
		select.appendChild(option);
	}
	if (options.length == 0) {
		var option = document.createElement("option");
		option.text = "There are no objects in this universe";
		option.disabled = true;
		select.appendChild(option);
	}
}

function nextTimeFrame(dataFeildId, timeFrameId) {
	var time_frames_div = document.getElementById("time_frames[" + dataFeildId + "]");
	toggleElementsDisplay(["time_frame[" + dataFeildId + "][" + timeFrameId + "]", "time_frame[" + dataFeildId + "][" + (timeFrameId<(time_frames_div.childElementCount)-1 ? timeFrameId+1 : 0) + "]"]);
}

function previousTimeFrame(dataFeildId, timeFrameId) {
	var time_frames_div = document.getElementById("time_frames[" + dataFeildId + "]");
	toggleElementsDisplay(["time_frame[" + dataFeildId + "][" + timeFrameId + "]", "time_frame[" + dataFeildId + "][" + (timeFrameId>0 ? timeFrameId-1 : (time_frames_div.childElementCount)-1) + "]"]);
}

function toggleTimeFrames(dataFeildId, state) {
    var time_frames_div = document.getElementById("time_frames[" + dataFeildId + "]");
    if (state) {
        var time_frame_span = document.getElementById("time_frame_span[" + dataFeildId + "][0]");
        time_frame_span.style.display = "block";
    } else {
        var time_frame = document.getElementById("time_frame[" + dataFeildId + "][0]");
        var time_frame_span = document.getElementById("time_frame_span[" + dataFeildId + "][0]");
        for (var i = 0; i < (time_frames_div.childElementCount)-1; i++) {
            time_frames_div.children[i].style.display = "none";
        }
        time_frame.style.display = "block";
        time_frame_span.style.display = "none";
    }
}

function addTimeFrame(dataFeildId, timeFrameId, type) {
    var time_frames_div = document.getElementById("time_frames[" + dataFeildId + "]")
    var time_frame_id = (time_frames_div.childElementCount);
    
    var time_frame = document.createElement("div");
    time_frame.id = "time_frame[" + dataFeildId + "][" + time_frame_id + "]";
    time_frame.style.display = "block";
    
    var time_frame_span = document.createElement("div");
    time_frame_span.id = "time_frame_span[" + dataFeildId + "][" + time_frame_id + "]";
    
    var previous_time_frame_button = document.createElement("input");
    previous_time_frame_button.type = "button";
    previous_time_frame_button.name = "commit";
    previous_time_frame_button.value = "Previous Timeframe";
    previous_time_frame_button.classList.add("btn");
    previous_time_frame_button.classList.add("size-halfwidth");
    previous_time_frame_button.classList.add("float-left");
    previous_time_frame_button.setAttribute("onclick", "previousTimeFrame(" + dataFeildId + ", " + time_frame_id + ");");
    
    var next_time_frame_button = document.createElement("input");
    next_time_frame_button.type = "button";
    next_time_frame_button.name = "commit";
    next_time_frame_button.value = "Next Timeframe";
    next_time_frame_button.classList.add("btn");
    next_time_frame_button.classList.add("size-halfwidth");
    next_time_frame_button.classList.add("float-left");
    next_time_frame_button.setAttribute("onclick", "nextTimeFrame(" + dataFeildId + ", " + time_frame_id + ");");
    
    var add_time_frame_button = document.createElement("input");
    add_time_frame_button.type = "button";
    add_time_frame_button.name = "commit";
    add_time_frame_button.value = "Add Timeframe";
    add_time_frame_button.classList.add("btn");
    add_time_frame_button.classList.add("size-fullwidth");
    add_time_frame_button.classList.add("float-left");
    add_time_frame_button.setAttribute("onclick", "addTimeFrame(" + dataFeildId + ", " + time_frame_id + ", '" + type + "');");
    
    var time_frame_id_text = document.createTextNode("Timeframe " + (time_frame_id+1) + ":");
    
    var time_frame_time_group = document.createElement("div");
    time_frame_time_group.classList.add("group-micro");
    
    var time_frame_time_start_label = document.createElement("label");
    time_frame_time_start_label.innerHTML = "Start:\xa0";
    
    var time_frame_time_start = document.createElement("input");
    time_frame_time_start.name = "obj[data_feilds_time_start][][" + time_frame_id + "]";
    time_frame_time_start.classList.add("input");
    time_frame_time_start.classList.add("input-sm");
    time_frame_time_start.type = "number";
    
    var time_frame_time_end_label = document.createElement("label");
    time_frame_time_end_label.innerHTML = "End:\xa0\xa0\xa0";
    
    var time_frame_time_end = document.createElement("input");
    time_frame_time_end.name = "obj[data_feilds_time_end][][" + time_frame_id + "]";
    time_frame_time_end.classList.add("input");
    time_frame_time_end.classList.add("input-sm");
    time_frame_time_end.type = "number";

    if (type == "text") {
        var time_frame_value_label = document.createElement("label");
        time_frame_value_label.innerHTML = "Text"
        var time_frame_value = document.createElement("textarea");
        time_frame_value.name = "obj[data_feilds_value][][" + time_frame_id + "]";
        time_frame_value.classList.add("textarea");
        time_frame_value.classList.add("textarea-vertical");
        time_frame_value.classList.add("size-fullwidth");
    } else if (type == "link") {
        var time_frame_value_label = document.createElement("label");
        time_frame_value_label.innerHTML = "Link"
        var time_frame_value = document.createElement("select");
        time_frame_value.name = "obj[data_feilds_value][][" + time_frame_id + "]";
        time_frame_value.classList.add("select");
        time_frame_value.classList.add("size-fullwidth");
        
        var form_select = document.getElementById("new_link_field_obj");
        
        for (var i = 0; i < form_select.options.length; i++) {
    		var option = document.createElement("option");
    		option.text = form_select.options[i].text;
    		option.value = form_select.options[i].value;
    		
    		time_frame_value.appendChild(option);
        }
    }
    
    time_frame_time_group.appendChild(time_frame_time_start_label);
    time_frame_time_group.appendChild(time_frame_time_start);
    time_frame_time_group.appendChild(br());
    time_frame_time_group.appendChild(time_frame_time_end_label);
    time_frame_time_group.appendChild(time_frame_time_end);
    time_frame_time_group.appendChild(br());
    
    time_frame_span.appendChild(previous_time_frame_button);
    time_frame_span.appendChild(next_time_frame_button);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(add_time_frame_button);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(time_frame_id_text);
    time_frame_span.appendChild(br());
    time_frame_span.appendChild(time_frame_time_group);
    
    time_frame.appendChild(time_frame_span);
    time_frame.appendChild(time_frame_value_label);
    time_frame.appendChild(br());
    time_frame.appendChild(time_frame_value);
    time_frame.appendChild(br());
    
    time_frames_div.appendChild(time_frame);
    
    var old_time_frame = document.getElementById("time_frame[" + dataFeildId + "][" + timeFrameId + "]")
    old_time_frame.style.display = "none";
}