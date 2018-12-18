using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace PortfolioAPI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //HttpContext.Current.Response.AppendHeader("Access-Control-Allow-Origin", "*");
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            var req = HttpContext.Current.Request;
            if (req.Url.PathAndQuery.StartsWith("/signalr/"))
            {
                var resp = HttpContext.Current.Response;
                resp.AddHeader("Access-Control-Allow-Origin", "http://d2qzsnq0bgihxy.cloudfront.net");
                resp.AddHeader("Access-Control-Allow-Credentials", "true");
                resp.AddHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
                resp.AddHeader("Access-Control-Allow-Headers", "accept, content-type");
            }
        }
    }
}
