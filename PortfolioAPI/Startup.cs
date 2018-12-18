using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

[assembly: OwinStartupAttribute(typeof(PortfolioAPI.Startup))]
namespace PortfolioAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
            //GlobalHost.DependencyResolver.Register(
            //    typeof(AgencyRepHub),
            //    () => GlobalConfiguration.Configuration.DependencyResolver.GetService(typeof(AgencyRepHub))
            //);
            var hubConfiguration = new HubConfiguration();
            hubConfiguration.EnableDetailedErrors = true;
            app.MapSignalR(hubConfiguration);
        }
    }
}                                                                                                            