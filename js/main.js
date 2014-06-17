var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });
    },
	
	//shows alert from navigator or native notification
	showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	}	

	//test message
	initialize: function() {
		var self = this;
		this.store = new WebSqlStore(function() {
			self.showAlert('Store Initialized, MainJS', 'Info');
		});
		$('.search-key').on('keyup', $.proxy(this.findByName, this));
	}

    /*initialize: function() {
        this.store = new WebSqlStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }*/

};

app.initialize();