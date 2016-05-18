var CommentBox = React.createClass({
	getInitialState: function() {
		return {data: 0};
	},
	// Called automatically when component is rendered for first time
	componentDidMount: function() {
		$.ajax({
			method: "GET",
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, satus, err.toString());
			}.bind(this)
		});
	},
	render: function() {
		return (
			<h1> Current counter is: {this.state.data} </h1>
		);
	}
});
