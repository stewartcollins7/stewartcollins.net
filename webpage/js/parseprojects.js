function addLanguageLogos(language){
	switch(language) {
	case "C#":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/csharp.png"height="40" width="40">';
	case "Java":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/Java.png"height="40" width="40">';
	case "HTML":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/html.png"height="40" width="40">';
	case "CSS":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/css.png"height="40" width="40">';
	case "Javascript":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/javascript.png"height="40" width="40">';
	case "Haskell":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/haskell.png"height="40" width="40">';
	case "C+":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/cplus.png"height="40" width="40">';
	case "C":
		return '<img class="img-thumbnail" alt="' + language + '" src="img/c.png"height="40" width="40">';
	case "SQL":
	    return '<img class="img-thumbnail" alt="' + language + '" src="img/sql.png"height="40" width="40">';
	default:
		return '';
	}
}

function parseProjects(){
	var parsedProjects = JSON.parse(projectsJSON);
	var projectsPanelHTML = "";
	var languages, collapseID;
	var i, itemNumber;
	
	for(i=0;i<parsedProjects.length;i++){
		collapseID = "collapse";
		collapseID += (i+1).toString();
		
		//Add project heading
		projectsPanelHTML += '<div class="panel panel-default"><div class="panel-heading"><div class="row"><h2 class="panel-title"><div class="col-xs-3">';
		
		//Add language logo icons
		for(j=0;j<parsedProjects[i].languages.length;j++){
			projectsPanelHTML += addLanguageLogos(parsedProjects[i].languages[j]);
		}
		
		//Add project name from JSON
		projectsPanelHTML += '</div><div class="col-xs-6">';
		projectsPanelHTML += '<a data-toggle="collapse" data-parent="#accordion" href="#' + collapseID + '">' + parsedProjects[i].name + '</a></div><div class="col-xs-3">';
		//Add a github link button
		if(parsedProjects[i].github != null){
			projectsPanelHTML += '<a href="' + parsedProjects[i].github + '" target="_blank"><img class="img-thumbnail github" alt="Github link" style="background-color:black;" src="img/github.png"></a>';
		}		
		//Close heading and add accordion info
		projectsPanelHTML += '</div></div></h2></div><div id="' + collapseID + '" class="panel-collapse collapse"><div class="panel-body container-fluid">';
		//Add screenshot if exists TODO Get screenshot from file)
		if(parsedProjects[i].screenshot != null){
			projectsPanelHTML += '<div class="row"><h3 class="col-sm-4">Screenshot</h3><div class="col-sm-8"><img class="img-responsive" style="display:block;margin:auto;" src="' + parsedProjects[i].screenshot + '" width="500" height="500" alt"screenshot"></div></div>';
		}//Add description
		projectsPanelHTML += '<div class="row"><h3 class="col-sm-4">Description</h3><h3 class="col-sm-8">' + parsedProjects[i].description + '</h3></div>';
		//Add languages
		projectsPanelHTML += '<div class="row"><h3 class="col-sm-4">Language/s</h3><h3 class="col-sm-8">' + parsedProjects[i].languages.toString() + '</h3></div>';
		//Add tools
		projectsPanelHTML += '<div class="row"><h3 class="col-sm-4">Tools Used</h3><ul class="col-sm-8">';
		for(j=0;j<parsedProjects[i].tools.length;j++){
			projectsPanelHTML += '<li>' + parsedProjects[i].tools[j] + '</li>';
		}projectsPanelHTML += '</ul></div>';
		//Add role
		projectsPanelHTML += '<div class="row"><h3 class="col-sm-4">Role</h3><h3 class="col-sm-8">Individual Project</h3></div>';
		//Add github link
		if(parsedProjects[i].github != null){
			projectsPanelHTML += '<div class="row"><h3 class="col-sm-4">Code</h3><h3 class="col-sm-8"><a href="' + parsedProjects[i].github + '" target="_blank">Github link here</a></h3></div>';
		}//Close off divs
		projectsPanelHTML += '</div></div></div>';
	}document.getElementById("accordion").innerHTML = projectsPanelHTML;
}

$( window ).load( parseProjects() );


	