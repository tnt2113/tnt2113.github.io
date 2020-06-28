var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}


var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;
    var greetText = 
      "################################################################################################\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "|\t\tWelcome, You have reached " + commandText('Tara') + "  -  graduate student and coffee aficionado.\t\t\t|\n"+
      "|\t\tPlease type " +commandText('ls')+" or " +commandText('help')+ " followed by the ENTER key to access a list of commands.\t\t|\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "################################################################################################\n";
    if (!ret) {
        this.echo("\n" + greetText);
    } else {
        return greetText;
    }
  },
  ls: function(){
    this.exec('menu');
  },
  rm: function(command){
    this.echo();
    this.echo("|  Oh no!! don't delete that!");  
    this.echo();
  },
  cd: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  directory is not selected.");
    }
  },
  find: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  help: function(){
    this.exec('menu');
  },
  menu: function(){
    this.echo();
    this.echo("|  " + commandText("about") + "              - About Me");
    this.echo("|  " + commandText("research") + "           - Research projects");
    this.echo("|  " + commandText("skills") + "             - Technical Proficiencies");    
    this.echo("|  " + commandText("work") + "               - Professional Experience");
    this.echo("|  " + commandText("courses") + "            - Course notes");
    this.echo("|  " + commandText("online") + "             - Find me on the internet");
    this.echo("|  " + commandText("credits") + "            - How I made this website");
   // this.echo("|");
   //  this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
    this.echo();
  },
  online: function(){
    this.echo();
    this.echo("|  " + commandText("GitHub") + ":       http://github.com/tnt2113");
    this.echo("|  " + commandText("LinkedIn") + ":     https://www.linkedin.com/in/tara-templin-7360b174");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  http://github.com/tnt2113");
    this.echo();
  },

  linkedin: function(){
    this.echo();
    this.echo("|  https://www.linkedin.com/in/tara-templin-7360b174");
    this.echo();
  },

  blog: function(){
    this.echo();
    this.echo("|  http://tnt2113.github.io/blog");
    this.echo();
  },
  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|  " + commandText('Stanford University') + "                            ");
    this.echo("|    • Gerhard Casper Fellow (Palo Alto, CA; June 2018 – Present)");
    this.echo("|    • Teaching Assistant, Outcomes Analysis (Palo Alto, CA; April 2020 – June 2020)");
    this.echo("|    • Research Assistant, Socio-Economic Determinants of Obesity (Palo Alto, CA; September 2017 – June 2018)");
    this.echo("|");    
    this.echo("|  " + commandText('Council on Foreign Relations') + "                            ");
    this.echo("|    • Independent Consultant, Health Systems and Disease Forecasting (Palo Alto, CA; November 2016 – June 2020)");
    this.echo("|");
    this.echo("|  " + commandText('Institute for Health Metrics and Evaluation') + "                            ");
    this.echo("|    • Researcher, Health Expenditure and Financial Forecasting (Seattle, WA; September 2015 – July 2016)");
    this.echo("|    • Practicum Student, University Teaching Hospital, Infectuous Disease Unit (Lusaka, Zambia; July 2015 – August 2015)");
    this.echo("|    • Post-Bachelor Fellow, Health Financing (Seattle, WA; September 2013 – September 2015)");
    this.echo("|");
    this.echo("|  " + commandText('Center for Global Development') + "                            ");
    this.echo("|    • Independent Consultant, Results-Based Financing (New York, NY; November 2012 – April 2013)");
    this.echo("|    • Research Intern, Cash on Delivery Aid Program (Washington, DC; June 2011 – August 2011)");
    this.echo("|");
    this.echo("|  " + commandText('Department of Interior') + "                            ");
    this.echo("|    • Summer Fellow, Office of Public Engagement (Washington, DC; June 2010 – August 2010)");
    this.echo("|");
    this.echo("|  " + commandText('Education') + "                            ");
    this.echo("|    • Ph.D in Health Economics : Stanford University");
    this.echo("|    • MS in Stats              : Stanford University");
    this.echo("|    • GNM coursework           : University of Washington");
    this.echo("|    • BA in Econ-Math          : Columbia University");
    this.echo();
  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('Tara Templin'));
    this.echo("|");
    this.echo("|  About:        I am a " + commandText('Health Policy PhD candidate') + " specializing in Health Economics at " + commandText('Stanford University') +".");
    this.echo("|                I also obtained my Statistics M.S. from Stanford and my B.A. in Economics and Mathematics from Columbia. Before Stanford, I worked at the ");
    this.echo("|                University of Washington's Institute for Health Metrics and Evaluation. I like reproducible research and making complex statistical "); 
    this.echo("|                concepts easy to understand. Other interests include coffee, travel, board games, rock climbing, and disco music.");
    this.echo("|");
    this.echo("|  More here:   http://tnt2113.github.io/about");
    this.echo();
  },
  project: function(){
    this.exec('projects');
  },
  projects: function(){
    this.echo();
    this.echo("|  Under construction ");
    this.echo();
  },
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Statistical Computing] ");
    this.echo("|  " + commandText('R') + "                      ##[[g;#5BD100;]##################################################] ##"); 
    this.echo("|  " + commandText('Stata') + "                  ##[[g;#5BD100;]##################################################] ##");
    this.echo("|  " + commandText('Python') + "                 ##[[g;#B2D100;]##############################################]     ##");
    this.echo("|  " + commandText('Mata') + "                   ##[[g;#B2D100;]##############################################]     ##");    
    this.echo("|  " + commandText('bash') + "                   ##[[g;#B2D100;]#######################################]            ##");            
    this.echo("|  " + commandText('C++') + "                    ##[[g;#D13F00;]#######################]                            ##");  
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Interactive Data Viz] ");
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('CSS') + "                    ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|");
    // this.echo("|  " + commandText("Database"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('MySQL') + "                  ##[[g;#B2D100;]##############################]                     ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Operating Systems] ");
    // this.echo("|  " + commandText("Native Mobile / Game Dev"));
    // this.echo("|");
    this.echo("|  " + commandText('Windows') + "                ##[[g;#5BD100;]###############################################]    ##");
    this.echo("|  " + commandText('Linux') + "                  ##[[g;#B2D100;]######################################]             ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Languages] ");
    // this.echo("|");
    this.echo("|  " + commandText('English') + "                ##[[g;#5BD100;]##################################################] ##");
    this.echo("|  " + commandText('French') + "                 ##[[g;#B2D100;]#######################################]            ##");
    this.echo();
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Site built by " + commandText('Tara Templin'));
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo("|  Shout out to the " + commandText('Examples Page') + " for providing this template : http://terminal.jcubic.pl/examples.php");        
    this.echo();
  },
  blog: function(){
    window.location.href = "./blog";
  },
  courses: function(){
    window.location.href = "./courses";
  },  
  code: function(){
    window.location.href = "./code";
  },   
  research: function(){
    window.location.href = "./research";
  },   
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
  },
  all: function(){
    this.echo();
    this.echo("Doesn't work yet, but will soon!");
    // this.clear();
    // this.exec('intro');
    // this.exec('about');
    // this.exec('work');
    // this.exec('projects');
    // this.exec('skills');
    // this.exec('awards');
    // this.exec('social');
    // this.exec('contact');
    // this.exec('resume');
  },
  sudo: function(){
    this.exec('login');
  },
  login: function(){
    this.echo();
    this.echo("|  login function currently under development");
    this.echo();
  },
  du: function(){
    this.echo();
    this.echo("|  100%");
    this.echo();
  },
  mv: function(){
    this.echo();
    this.echo("|  dont't move!");
    this.echo();
  },
  pwd: function(){
    this.echo();
    this.echo("|  http://tnt2113.github.io");
    this.echo();
  },
  cp: function(){
    this.echo();
    this.echo("|  dont't copy!");
    this.echo();
  },
  mkdir: function(){
    this.echo();
    this.echo("|  mkdir function currently under development");
    this.echo();
  },
  mobile: function(){
    that.clear();
    that.echo("[[g;#5BD100;]TARA TEMPLIN]");
    that.echo("Ph.D. candidate in Health Policy");
    that.echo();   
    that.echo("[[g;#B2D100;]ABOUT]");    
    that.echo("http://tnt2113.github.io/about");  
    that.echo();   
    that.echo("[[g;#B2D100;]RESEARCH]");
    that.echo("http://tnt2113.github.io/research");
    that.echo();
    that.echo("[[g;#B2D100;]TEACHING]");
    that.echo("http://tnt2113.github.io/courses");
    that.echo();
  },
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').terminal(App, {
      greetings: function(cb){
        that = this;
        // cb(App.intro(true));
        cb(App.mobile());
      },

      onBlur: function() {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });    
  } else {
    $('body').terminal(App, {
      greetings: function(cb){
        cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});
