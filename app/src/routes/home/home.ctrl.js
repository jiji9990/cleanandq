const output = {
  home: (req,res) => {
    res.render("home/main");
  },
  
  login: (req,res) => {
    res.render("home/login");
  },
  
  register: (req,res) => {
    res.render("home/register");
  },

  hanstone: (req,res) => {
    res.render("home/hanstone");
  },

  homesash: (req,res) => {
    res.render("home/homesash");
  },

      normal: (req,res) => {
        res.render("home/sash/normal");
      },

      balcony: (req,res) => {
        res.render("home/sash/balcony");
      },

      system: (req,res) => {
        res.render("home/sash/system");
      },

      rehau: (req,res) => {
        res.render("home/sash/rehau");
      },

      aluminium: (req,res) => {
        res.render("home/sash/aluminium");
      },

      specialuse: (req,res) => {
        res.render("home/sash/specialuse");
      },

      sheetcolor: (req,res) => {
        res.render("home/sash/sheetcolor");
      },

      handle: (req,res) => {
        res.render("home/sash/handle");
      },

  flooring: (req,res) => {
    res.render("home/floor/flooring");
  },

      maru: (req,res) => {
        res.render("home/floor/maru/maru");
      },

            sentra7: (req,res) => {
              res.render("home/floor/maru/sentra7/sentra7");
            },
                sentra7char: (req,res) => {
                  res.render("home/floor/maru/sentra7/sentra7char");
                },

            sentra6: (req,res) => {
              res.render("home/floor/maru/sentra6/sentra6");
            },
                sentra6char: (req,res) => {
                  res.render("home/floor/maru/sentra6/sentra6char");
                },

      leum: (req,res) => {
        res.render("home/floor/leum/leum");
      },

            artium2: (req,res) => {
              res.render("home/floor/leum/artium2/artium2");
            },
                artium2char: (req,res) => {
                  res.render("home/floor/leum/artium2/artium2char");
                },

            artium3: (req,res) => {
              res.render("home/floor/leum/artium3/artium3");
            },
                artium3char: (req,res) => {
                  res.render("home/floor/leum/artium3/artium3char");
                },

                artium3ex: (req,res) => {
                  res.render("home/floor/leum/artium3/artium3ex");
                },

            charm: (req,res) => {
              res.render("home/floor/leum/charm/charm");
            },
                charmchar: (req,res) => {
                  res.render("home/floor/leum/charm/charmchar");
                },

            goldstrong: (req,res) => {
              res.render("home/floor/leum/goldstrong/goldstrong");
            },
                goldstrongchar: (req,res) => {
                  res.render("home/floor/leum/goldstrong/goldstrongchar");
                },

            myeong20: (req,res) => {
              res.render("home/floor/leum/myeong20/myeong20");
            },
                myeong20char: (req,res) => {
                  res.render("home/floor/leum/myeong20/myeong20char");
                },
  
            myeong22: (req,res) => {
              res.render("home/floor/leum/myeong22/myeong22");
            },
                myeong22char: (req,res) => {
                  res.render("home/floor/leum/myeong22/myeong22char");
                },
      
            sorigium: (req,res) => {
              res.render("home/floor/leum/sorigium/sorigium");
            },
                sorigiumchar: (req,res) => {
                  res.render("home/floor/leum/sorigium/sorigiumchar");
                },

                // sorigiumex: (req,res) => {
                //   res.render("home/floor/leum/sorigium/sorigiumex");
                // },

      tile: (req,res) => {
        res.render("home/floor/tile/tile");
      },

            carpet: (req,res) => {
              res.render("home/floor/tile/carpet/carpet");
            },
                carpetchar: (req,res) => {
                  res.render("home/floor/tile/carpet/carpetchar");
                },

            deluxe: (req,res) => {
              res.render("home/floor/tile/deluxe/deluxe");
            },
                deluxechar: (req,res) => {
                  res.render("home/floor/tile/deluxe/deluxechar");
                },

            goldregent: (req,res) => {
              res.render("home/floor/tile/goldregent/goldregent");
            },
                goldregentchar: (req,res) => {
                  res.render("home/floor/tile/goldregent/goldregentchar");
                },

            dongseo: (req,res) => {
              res.render("home/floor/tile/dongseo/dongseo");
            },
                dongseochar: (req,res) => {
                  res.render("home/floor/tile/dongseo/dongseochar");
                },

            goldclassic: (req,res) => {
              res.render("home/floor/tile/goldclassic/goldclassic");
            },
                goldclassicchar: (req,res) => {
                  res.render("home/floor/tile/goldclassic/goldclassicchar");
                },

            goldmaster: (req,res) => {
              res.render("home/floor/tile/goldmaster/goldmaster");
            },
                goldmasterchar: (req,res) => {
                  res.render("home/floor/tile/goldmaster/goldmasterchar");
                },
      
            rubber: (req,res) => {
              res.render("home/floor/tile/rubber/rubber");
            },
                rubberchar: (req,res) => {
                  res.render("home/floor/tile/rubber/rubberchar");
                },
      
      function: (req,res) => {
        res.render("home/floor/function/function");
      },

            conductive: (req,res) => {
              res.render("home/floor/function/conductive/conductive");
            },
                conductivechar: (req,res) => {
                  res.render("home/floor/function/conductive/conductivechar");
                },

            oa: (req,res) => {
              res.render("home/floor/function/oa/oa");
            },
                oachar: (req,res) => {
                  res.render("home/floor/function/oa/oachar");
                },
};

module.exports = { output };