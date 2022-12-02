
const Data= [{
                 'step':0,
                 'title':'title',
                 'description':'some random short description with length 200 words',
                 'notes':"",
                 'bugs' :"",
                 "task" :[],
                 'data':{   
    	                 'id':0,
                         'parent_id':null,
    	                 'name':'root',
    	                 'isFolder':true, 
    	                 'code':null,
                         'path':'root',
    	                 'contains':[
                                   {
                                    'id':0,
                                    'parent_id':0,
                                    'name':'file1',
                                    'isFolder':false, 
                                    'code':null,
                                    'path':'root/file1.txt',
                                    'contains':[]
                                   },
                                   {
                                    'id':1,
                                    'parent_id':0,
                                    'name':'file2',
                                    'isFolder':false, 
                                    'code':null,
                                    'path':'root/file2.txt',
                                    'contains':[]
                                   }
                                  ]
    	              }
             }
             ]
             


export {Data}