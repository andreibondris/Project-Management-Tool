var users = [{ 'id': 1,
        'name': 'mihai'
},
{        'id': 2,
        'name': 'andrei'
}];

var issues = [
{       'id': 1,
        'type': 'feature',
        'name': 'Login Form',
        'sprint': 'Authentication',
        'createdBy': users.id,
        'asignee': users.id,
        'description': 'make a login form containing 2 inputs and a login button',
        'status': 'new',
        'tasks': ['username input', 'password input', 'login button'],
        'comments': '',
        'updatedAt': '1/23/2019',
        'createdAt': '1/20/2019'
}, 
{       'id': 2,
        'type': 'bug',
        'name': 'Login issue',
        'sprint': 'Authentication',
        'createdBy': users.id,
        'asignee': users.id,
        'description': 'login button broken',
        'status': 'new',
        'tasks': ['username input', 'password input', 'login button'],
        'comments': '',
        'updatedAt': '1/23/2019',
        'createdAt': '1/20/2019'
}];

var Project = { 'id': 1,
        'name': 'Web App'
};

var sprints = { 'id': 1,
        'name': 'Authentication'
};

var createIssueButton = document.querySelector('.create-issue');
var submitButton = document.querySelector('.submit-button');
var issueForm = document.querySelector('.issue-form');
var saveButton = document.querySelector('.userName');
var showIssuesButton = document.querySelector('.show-issues');

createIssueButton.addEventListener("click", function() {
        document.querySelector(".issue-form").style.display = 'block';
        pushUsers();
})

var pushUsers = function() {
        var usersDropDown = document.querySelector('.users');
        var option;
        users.forEach(element => {
                option = '<option value="' + element.name + '">' + element.name + '</option>';
                var optionMadeNode = document.createRange().createContextualFragment(option); //turn string into html node
                usersDropDown.appendChild(optionMadeNode);
        });
        console.log(usersDropDown);
}


submitButton.addEventListener("click", function(e) {
        e.preventDefault();
        var issueType = document.querySelector('input[name="type"]:checked').value;
        var issueName = document.querySelector('input[name="name"]').value;
        var sprint = document.querySelector('input[name="sprint"]:checked').value;
        var asignedTo = document.querySelector('.users').value;
        var description = document.querySelector('.descr').value;
        var status = document.querySelector('input[name="status"]:checked').value;
        var task = document.querySelector('input[name="task"]').value;

        var createdIssue = createIssue(issueType, issueName, sprint, asignedTo, description, status, task);
        issues.push(createdIssue);
        console.log(issues);

        document.querySelector(".issue-form").style.display = 'none';
       // document.write(issues);
})

saveButton.addEventListener('click', function() {
        var userName = document.querySelector('input[name="user"]').value;
        var createdUser = createUser(userName);
        users.push(createdUser);
        console.log(users);
})

showIssuesButton.addEventListener('click', function() {
        var content;
        issues.forEach(element => {
                content = '<h4 class = "name">Issue\'s name: ' + element.name + '</h4>\
                           <p class = "type">Issue\'s type: ' + element.type + '</p>\
                           <p class = "sprint">Belongs to ' + element.sprint + ' sprint</p>\
                           <p class = "createdBy">Created by ' + element.createdBy + '</p>\
                           <p class = "createdAt">Created at ' + element.createdAt + '</p>\
                           <p class = "status">Status: ' + element.status + '</p>\
                           <p class = "descr">Description: ' + element.description + '</p>\
                           <p class = "task">Tasks: ' + element.tasks + '</p>';
                var contentHTML = document.createRange().createContextualFragment(content);
                document.querySelector('.all-issues').appendChild(contentHTML);
        })
})

var createUser = function(userName) {
        var user = {};
        user.id = users.length + 1;
        user.name = userName;
        return user;
}

var createIssue = function(type, name, sprint, asignedTo, descr, status, task) {
        var issue = {};
        issue.id = issues.length + 1;
        issue.type = type;
        issue.name = name;
        issue.sprint = sprint;
        issue.createdBy = users[users.length-1].name;
        issue.asignedTo = asignedTo;
        issue.description = descr;
        issue.status = status;
        issue.tasks = task;
        issue.comments = '';
        issue.updatedAt = new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear();
        issue.createdAt = new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear();
        return issue;
}