using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace AccuteSelectMinifyIssue
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
             //bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
             //       "~/Scripts/jquery-{version}.js"));        

            bundles.Add(new ScriptBundle("~/bundles/vendor").Include(
                   "~/Scripts/angular/angular.js",
                   "~/Scripts/vendor/acute.select/acute.select.js"
                   ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(                   
                   "~/App/MainCtrl.js"));

            bundles.Add(new StyleBundle("~/bundles/styles").Include(
                   "~/Scripts/vendor/acute.select/acute.select.css"));

        }
    }
}