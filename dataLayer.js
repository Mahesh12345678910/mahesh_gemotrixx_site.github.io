window.adobeDataLayer= window.adobeDataLayer || []
      
      var digitalData = digitalData || {};
        digitalData = {
            page: {
                pageInfo: {
                    pageName: "",
                    pageURL:"",
                    pageType :"",
                    

                },
                categories :{
                    primaryCategory:undefined,
                    subCategory1:undefined,
                    subCategory2 : undefined,
                    subCategory3 : undefined
                },
                attributes:{
                    country:"in",
                    language : "en",
                    platform :"desktop Website"

                },
                error:{
                    errorCode:"",
                    errorDescription :""
                }
                },
                event : "pageView",
               
                user:{
                    userInfo:{

                    userEmail:undefined,
                    userID : undefined,
                    userStatus : undefined
                    }

                    
                }

        };
 

        digitalData.page.pageInfo.pageURL=document.URL;
        digitalData.page.pageInfo.referrerURL=document.referrer;

        let pageURL=document.URL;
        let urlobj=new URL(pageURL);
        let categories=urlobj.pathname.split("/");
        for(let i=0;i<categories.length;i+=1)
        {
            if(i==0)
            {
                digitalData.page.categories.primaryCategory="Geometrixx"
            }
            else if(i==categories.length-1)
            {

                let key="subCategory"+i;
                let val=categories[i].split(".")[0];
                digitalData.page.categories[key]=val;
            }
            else
            {
                let key="subCategory"+i;
                
                digitalData.page.categories[key]=categories[i];   
            }
        }

        

    digitalData.page.pageInfo.pageName = digitalData.page.attributes.country + ":" +digitalData.page.attributes.language ;


    if(digitalData.page.categories.primaryCategory && digitalData.page.categories.primaryCategory.length>0)
    {
        digitalData.page.pageInfo.pageName += ":"+digitalData.page.categories.primaryCategory;
    }
    else
    {
        digitalData.page.pageInfo.pageName += ":na";
    }
    if(digitalData.page.categories.subCategory1 && digitalData.page.categories.subCategory1.length>0)
    {
        digitalData.page.pageInfo.pageName += ":"+digitalData.page.categories.subCategory1;
    }
    else
    {
        digitalData.page.pageInfo.pageName += ":na";
    }
    if(digitalData.page.categories.subCategory2 && digitalData.page.categories.subCategory2.length>0)
    {
        digitalData.page.pageInfo.pageName += ":"+digitalData.page.categories.subCategory2;
    }
    else
    {
        digitalData.page.pageInfo.pageName += ":na";
    }
    if(digitalData.page.categories.subCategory3 && digitalData.page.categories.subCategory3.length>0)
    {
        digitalData.page.pageInfo.pageName += ":"+digitalData.page.categories.subCategory3;
    }
    else
    {
        digitalData.page.pageInfo.pageName += ":na";
    }

window.adobeDataLayer.push(digitalData)
//   +digitalData.page.categories.subCategory1 ? digitalData.page.categories.subCategory2 : "na" + digitalData.page.categories.subCategory3 ? digitalData.page.categories.subCategory3 : "na" ;


          


        
        
    
    