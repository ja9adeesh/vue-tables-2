describe(suite  + ': Filters (Common)', function() {
	it('can display column filters', ()=>{

		createWrapper({filterByColumn:true});

		exists('.vue-table-filters-row');
		exists('[name="vf__code"]');
		exists('[name="vf__name"]');
		exists('[name="vf__uri"]');

	});

	it('can display list filters', ()=>{

		createWrapper({
			filterByColumn:true, 
			listColumns:{
				id:[
				{
					id:245,
					text:'Zimbabwe'
				},
				{
					id:244,
					text:'Zambia'
				}
				]
			}}, ['id','name','code','uri']);

		
			exists('.vue-table-filters-row select[name="vf__id"]');
			see('Select id', '.vue-table-filters-row select[name="vf__id"] option:first-child');
			see('Zimbabwe', '.vue-table-filters-row select[name="vf__id"] option:nth-child(2)');
			see('Zambia', '.vue-table-filters-row select[name="vf__id"] option:nth-child(3)');

	});

	it('can hide some options in list filters', ()=>{
		createWrapper({
			filterByColumn:true, 
			listColumns:{
				id:[
				{
					id:245,
					text:'Zimbabwe'
				},
				{
					id:244,
					text:'Zambia',
					hide:true
				},
				{
					id:243,
					text:'Yemen'
				}
				]
			}}, ['id','name','code','uri']);

		
			see('Select id', '.vue-table-filters-row select[name="vf__id"] option:first-child');
			see('Zimbabwe', '.vue-table-filters-row select[name="vf__id"] option:nth-child(2)');
			not_see('Zambia', '.vue-table-filters-row select[name="vf__id"]');
			see('Yemen', '.vue-table-filters-row select[name="vf__id"] option:nth-child(3)');

	});

	it('can display date filters', ()=>{

		createWrapper({
			filterByColumn:true,
			dateColumns:['created_at']
		}, ['code','name','uri','created_at']);

		exists('#vue-table-created_at-filter.vue-table-date-filter');

	});

	it('can hide the generic filter (regression test for #377)', () =>{
		exists('.vue-table-search-field');

		setOptions({
			filterable:false
		})

		not_exists('.vue-table-search-field');
	});
	
});