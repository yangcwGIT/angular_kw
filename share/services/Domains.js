(function() {
  angular.module('share').factory('Domains', [
    '$location', function($l) {
      var apihosts, domain, domainHosts, env, host, hosts;
      domain = $l.host();
      hosts = {
        'dev': 'http://192.168.8.107:1331',
        'main': 'http://ms.ikaowo.com',
        'prepro': 'http://ms.dev.ikaowo.com'
      };
      apihosts = {
        'dev': 'http://192.168.8.107:1333',
        'main': 'http://api.ikaowo.com',
        'prepro': 'http://api.dev.ikaowo.com'
      };
      domainHosts = {
        'm.dev.ikaowo.com': 'prepro',
        'm.ikaowo.com': 'main',
        '192.168.8.107': 'dev'
      };
      env = domainHosts[domain] || 'dev';
      return host = {
        ms: hosts[env],
        api: apihosts[env]
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=Domains.js.map
