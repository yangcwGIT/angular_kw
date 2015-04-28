/**
 * Created by jyo on 15-2-28.
 */
/*
require(["mmRouter"], function() {
    var model = avalon.define({
        $id: "test",
        currPath: "",
        params: {},
        query: {},
        args: "[]"
    });
    function callback() {
        model.currPath = this.path;
        var params = this.params;
        if ("time" in params) {
            params.time = avalon.filters.date(params.time, "yyyy年M月dd日");
        }
        console.log('params:',params);
        if ("gg" in params) {

            params.gg = params['gg'];
        }
        model.params = params;
        model.args = "[" + [].slice.call(arguments).join(",") + "]";
        model.query = this.query;
    }

    avalon.router.get("/aaa/:bb/:kk", callback);
    avalon.router.get("/bbb", callback);
    avalon.router.get("/ccc/:ccc", callback);
    avalon.router.get("/ddd/{time:date}/", callback);
    avalon.router.get("/ggg/{gg:string}/", callback);
    avalon.router.get("/eee/{count:\\d{5}}/", callback);
    avalon.router.get("/fff", callback);
    avalon.history.start({
        basepath: "/avalon"
    });
    avalon.scan();
})*/
