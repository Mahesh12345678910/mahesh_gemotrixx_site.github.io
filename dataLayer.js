        var digitalData = digitalData || {};
        digitalData = {
            page: {
                pageInfo: {
                    pageName: "",
                    pageURL:"",
                    referrerURL:"",
                    server:""
                }
                },
                categories :{
                    primaryCategory:undefined,
                    subCategory1:undefined,
                    subCategory2 : undefined,
                    subCategory3 : undefined
                },
                attributes:{
                    country:"INDIA",
                    date: new Date().toLocaleDateString()
                },
                user:{
                    userName:undefined,
                    userEmail:undefined,
                    userStatus:undefined
                }

        };
        
            digitalData.page.pageInfo.pageName=document.title;
        digitalData.page.pageInfo.pageURL=document.URL;
        digitalData.page.pageInfo.referrerURL=document.referrer;
        digitalData.page.pageInfo.server=window.location.hostname;
       
        let pageURL=document.URL;
        let urlobj=new URL(pageURL);
        let categories=urlobj.pathname.split("/");
        for(let i=0;i<categories.length;i+=1)
        {
            if(i==0)
            {
                digitalData.categories.primaryCategory="Geometrixx"
            }
            else if(i==categories.length-1)
            {

                let key="subCategory"+i;
                let val=categories[i].split(".")[0];
                digitalData.categories[key]=val;
            }
            else
            {
                let key="subCategory"+i;
                
                digitalData.categories[key]=categories[i];   
            }
        }
        digitalData.page.pageInfo.pageName=document.title;

        
        
    
    