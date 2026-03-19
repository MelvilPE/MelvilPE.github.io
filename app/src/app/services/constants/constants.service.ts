import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  constructor() {}

  public getDefaultDevOptions(): any {
    return {
      "keyedArchive": {
        "Account": {
          "keyedArchive": {
            "Allow short phone numbers": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: captcha clan commander error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: first captcha error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: captcha unknown error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: captcha unknown confirmation_type": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: confirmation code expired": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: confirmation code unknown error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: external credentials error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: forbidden_through_api error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "NetEase login always pass": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Deletion: retry captcha error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Emulate NetEase Channel": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force incomplete account status": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force show delete account": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "NetEase account disable aas popup window": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "NetEase account verify not allowed error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Local Notifications": {
          "keyedArchive": {
            "Use custom interval (5 min)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "XP reset timer blinking interval (sec)": {
              "keyedArchive": {
                "max": {
                  "float": 15
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            }
          }
        },
        "Joypad floating": {
          "keyedArchive": {
            "Display Zones": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Forward width": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.35
                }
              }
            },
            "Dead zone percent": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.17
                }
              }
            },
            "Max sensitivity scale": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.825
                }
              }
            },
            "Full Throttle": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Soft pure turn activation": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Floating activation offset x": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Floating activation offset y": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Min sensitivity scale": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1.05
                }
              }
            },
            "Sensitivity affects dead zone": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Sensitivity affects side": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Side additional angle": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 20
                }
              }
            },
            "Side bottom": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": -0.5
                },
                "value": {
                  "float": -0.077
                }
              }
            },
            "Side top": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": -0.5
                },
                "value": {
                  "float": 0.077
                }
              }
            },
            "Sniper forward width": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Turn range": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "ANR": {
          "keyedArchive": {
            "Watchdog timeout": {
              "keyedArchive": {
                "value": {
                  "int32": 5000
                }
              }
            },
            "Local crash percentage": {
              "keyedArchive": {
                "value": {
                  "float": 0.001
                }
              }
            },
            "Emulate timeout": {
              "keyedArchive": {
                "value": {
                  "int32": 5000
                }
              }
            },
            "Emulate ANR": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "None"
                },
                "value1": {
                  "string": "Native code"
                },
                "value2": {
                  "string": "Java code (android only)"
                }
              }
            },
            "Use local crash percentage": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Hit decals": {
          "keyedArchive": {
            "Show debug log": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Draw tank geometry cache": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Draw boxes for tank parts": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug boxes": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug hit point info": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug shot direction": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug raycast": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Armor visualization": {
          "keyedArchive": {
            "01) Red": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "11) Time to disappear": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "02) Green": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "03) Blue": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "07) Inverted": {
              "keyedArchive": {
                "hidden": {
                  "bool": false
                },
                "value": {
                  "bool": true
                }
              }
            },
            "04) Alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "05) MinPossibleDamageOffset": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.05
                }
              }
            },
            "06) GuaranteedDamageOffset": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.06
                }
              }
            },
            "08) Accurate viewDir calculation": {
              "keyedArchive": {
                "hidden": {
                  "bool": false
                },
                "value": {
                  "bool": false
                }
              }
            },
            "09) Appear delay": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "hidden": {
                  "bool": true
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "10) Time to appear": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.1
                }
              }
            },
            "12) Visualization enabled": {
              "keyedArchive": {
                "hidden": {
                  "bool": false
                },
                "value": {
                  "bool": true
                }
              }
            },
            "13) HE Non-piercable parts color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    0.392,
                    0,
                    0.5
                  ]
                }
              }
            },
            "14) Debug armor visualization": {
              "keyedArchive": {
                "hidden": {
                  "bool": false
                },
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Gamepad": {
          "keyedArchive": {
            "Shoulder buttons switch level": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.03
                }
              }
            },
            "ABXY buttons switch level": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.02
                }
              }
            },
            "Enable custom controls": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Triggers switch level": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.8
                }
              }
            },
            "RThumbstick sensitivity": {
              "keyedArchive": {
                "max": {
                  "float": 15
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 7
                }
              }
            }
          }
        },
        "Account Info": {
          "keyedArchive": {
            "Loot boxes denied": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Depend on WGNI"
                },
                "value1": {
                  "string": "False"
                },
                "value2": {
                  "string": "True"
                }
              }
            }
          }
        },
        "Debug charts": {
          "keyedArchive": {
            "Camera FOV (blue)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Camera Pitch (black)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Camera Yaw (yellow)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Latency Filter (cyan)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Connection Latency (red)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Filter Output Time Filter (green)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Frame Time (white)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Last Ping Filter (magenta)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Next Waypoint Position Filter (light grey)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Next Waypoint Position Filter (pink)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Received Position Filter (aqua)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Stored Position Filter (dark grey)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Advertising": {
          "keyedArchive": {
            "Shop chest hint period": {
              "keyedArchive": {
                "value": {
                  "int32": 604800
                }
              }
            },
            "Shop premium hint period": {
              "keyedArchive": {
                "value": {
                  "int32": 604800
                }
              }
            }
          }
        },
        "Ammo control": {
          "keyedArchive": {
            "Reload finish animation scale": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 1.25
                }
              }
            },
            "Reload finish animation time": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Text color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    1,
                    1,
                    1
                  ]
                }
              }
            },
            "Text shadow color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0,
                    0,
                    0,
                    1
                  ]
                }
              }
            },
            "Toggle animation time": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.05
                },
                "value": {
                  "float": 0.2
                }
              }
            }
          }
        },
        "Transparent controls options": {
          "keyedArchive": {
            "Transparency auto target button": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Transparency shoot button": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Transparency shell type selector button": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Transparency smart zoom button": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Transparent control sensitivity radius": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 30
                }
              }
            }
          }
        },
        "Analytics": {
          "keyedArchive": {
            "Installation message has been sent": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Send cloud pb events": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Use analytics in test mode": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "General": {
          "keyedArchive": {
            "Damage indicator fade time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 3.5
                }
              }
            },
            "Application start count": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "Show start battle buttons": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Max count of open chest message": {
              "keyedArchive": {
                "value": {
                  "int32": 100
                }
              }
            },
            "Damage indicator back fade time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1.5
                }
              }
            },
            "Show aiming info": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Highligh aim when target aimed": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Highlight touches": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Joypad zone accepts camera input": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug spread": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show server gun aim in autoaim mode": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show shell type selector button": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            }
          }
        },
        "Fast commands": {
          "keyedArchive": {
            "Team panel command duration": {
              "keyedArchive": {
                "max": {
                  "float": 60
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 3
                }
              }
            },
            "Command wheel opening press timeout": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Disabled duration": {
              "keyedArchive": {
                "max": {
                  "float": 15
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 3
                }
              }
            },
            "Double tap timeout to send command": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.15
                }
              }
            },
            "Input blocking after double touch timeout": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Analogue": {
          "keyedArchive": {
            "Display Zones": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Forward width": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.274
                }
              }
            },
            "Dead zone percent": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.17
                }
              }
            },
            "Max sensitivity scale": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.825
                }
              }
            },
            "Full Throttle": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Sensitivity affects dead zone": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Min sensitivity scale": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1.05
                }
              }
            },
            "Sensitivity affects side": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Side additional angle": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 20
                }
              }
            },
            "Side bottom": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": -0.5
                },
                "value": {
                  "float": -0.077
                }
              }
            },
            "Side top": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": -0.5
                },
                "value": {
                  "float": 0.077
                }
              }
            },
            "Sniper forward width": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Soft pure turn activation": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Turn range": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 0.5
                }
              }
            }
          }
        },
        "Detached Turret": {
          "keyedArchive": {
            "Write Detached Turret Trajectory": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Direct shoot options": {
          "keyedArchive": {
            "Direct shoot cancel rect x offset": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Direct shoot cancel rect height": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 132
                }
              }
            },
            "Direct shoot cancel rect y offset": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 270
                }
              }
            },
            "Direct shoot cancel rect width": {
              "keyedArchive": {
                "max": {
                  "float": 300
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 66
                }
              }
            },
            "Direct shoot delay time": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            }
          }
        },
        "Camouflage": {
          "keyedArchive": {
            "Camouflage visibility": {
              "keyedArchive": {
                "selected": {
                  "int32": 1
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "DISABLED"
                },
                "value1": {
                  "string": "ENABLED"
                },
                "value2": {
                  "string": "PLAYER_ONLY"
                }
              }
            },
            "Force Assign": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Battle Hints": {
          "keyedArchive": {
            "Disable hints for account": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "camera_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "back_to_garage": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "Enable resetting impressions for hints": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show hints debug info": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "armor_highlight_fast_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "armor_highlight_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "exit_sniper_mode_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "movement_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "player_armor_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "player_spotted_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "repair_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "shell_select_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "shoot_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "sniper_mode_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "sniper_mode_hint_repeat": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "stay_close_to_the_team_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "victory_hint": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            }
          }
        },
        "HUD": {
          "keyedArchive": {
            "Fire icon animation time": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.001
                },
                "value": {
                  "float": 2
                }
              }
            },
            "Color disabled control": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    1,
                    1,
                    0.5
                  ]
                }
              }
            },
            "Extinguisher animation time": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.001
                },
                "value": {
                  "float": 2
                }
              }
            },
            "Damage marker fade time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1.1
                }
              }
            },
            "Extinguisher shift X from fire icon": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": -50
                },
                "value": {
                  "int32": 0
                }
              }
            },
            "Shoot button alpha animation time": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Damage marker visibility time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 3.1
                }
              }
            },
            "Extinguisher shift Y from fire icon": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": -50
                },
                "value": {
                  "int32": 15
                }
              }
            },
            "Number of battles to unlock damage statistics control": {
              "keyedArchive": {
                "value": {
                  "float": 3
                }
              }
            },
            "Health smooth color": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Minimap touch zone cooldown": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.5
                },
                "value": {
                  "float": 3
                }
              }
            },
            "Health use yellow": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Minimap touch zone animation time": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.5
                },
                "value": {
                  "float": 2
                }
              }
            },
            "Shoot button bg alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Shoot button rotator alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.6
                }
              }
            },
            "Shoot button rotator period": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 5
                }
              }
            },
            "Shoot button shell alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Team panel debug nick": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Camera follow aim": {
          "keyedArchive": {
            "Follow acc magnet mult": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Follow acc magnet minimum": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 0.05
                }
              }
            },
            "Follow aim camera force": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Follow centring distance": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 120
                }
              }
            },
            "Follow aim mode version": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 2
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Client"
                },
                "value1": {
                  "string": "Server"
                }
              }
            },
            "Follow centring time": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Follow dec magnet minimum": {
              "keyedArchive": {
                "max": {
                  "float": 0.1
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Follow dec magnet mult": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.7
                }
              }
            },
            "Follow magnet power maximum": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.3
                }
              }
            },
            "Locked follow radius": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 1.5
                }
              }
            },
            "Follow magnet power minimum distance": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.3
                }
              }
            },
            "Follow magnet time": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Follow radius": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 4.3
                }
              }
            },
            "Follow selector center coef": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1.5
                }
              }
            },
            "Follow selector center minimum": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Follow selector distance coef": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.3
                }
              }
            },
            "Follow sense modifier": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.7
                }
              }
            }
          }
        },
        "Battle Metrics": {
          "keyedArchive": {
            "Force loginapp ping": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Gameplay Mode": {
          "keyedArchive": {
            "Force mode": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "random"
                },
                "value1": {
                  "string": "domination"
                },
                "value2": {
                  "string": "supremacy"
                }
              }
            }
          }
        },
        "Battle Pass": {
          "keyedArchive": {
            "Battle Pass Assets Path": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            }
          }
        },
        "Enemy Markers": {
          "keyedArchive": {
            "Enabled": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Screen show radius, pixels": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 102
                }
              }
            },
            "Hide on max distance reached": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Marker min alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.1
                }
              }
            },
            "Marker min scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.1
                }
              }
            },
            "Maximum show distance, m": {
              "keyedArchive": {
                "max": {
                  "float": 600
                },
                "min": {
                  "float": 100
                },
                "value": {
                  "float": 300
                }
              }
            },
            "Screen show radius Sniper, pixels": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 228
                }
              }
            }
          }
        },
        "Battle notification params": {
          "keyedArchive": {
            "Death reason": {
              "keyedArchive": {
                "selected": {
                  "int32": 1
                },
                "count": {
                  "int32": 4
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Default"
                },
                "value1": {
                  "string": "Ram"
                },
                "value2": {
                  "string": "Fire"
                },
                "value3": {
                  "string": "AmmoBayExploded"
                }
              }
            },
            "Sender or killer is teammate": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Sender or killer is enemy": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Type": {
              "keyedArchive": {
                "selected": {
                  "int32": 3
                },
                "count": {
                  "int32": 4
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "VehicleKilled"
                },
                "value1": {
                  "string": "ChatActionMessage"
                },
                "value2": {
                  "string": "ChatMessage"
                },
                "value3": {
                  "string": "None"
                }
              }
            },
            "Sender or killer is player": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Sender or killer is squad": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Suicide": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "With Assist": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Country choosing screen": {
          "keyedArchive": {
            "Add additional country": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            }
          }
        },
        "Battle notifications": {
          "keyedArchive": {
            "Animation blast max scale": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 1.5
                }
              }
            },
            "Animation min alpha scene": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Animation frame time": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.05
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Animation glow max alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.3
                }
              }
            },
            "Animation marker scale in minimap": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.8
                }
              }
            },
            "Animation marker scale in scene": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Animation min alpha minimap": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Battle results": {
          "keyedArchive": {
            "FakeReactions send timeout": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "Always play animations": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Achieved GunMarks number": {
              "keyedArchive": {
                "value": {
                  "float": 2
                }
              }
            },
            "All animations skip": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Always achieved GunMark": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Camera switching value": {
              "keyedArchive": {
                "value": {
                  "float": 2.5
                }
              }
            },
            "Force reason": {
              "keyedArchive": {
                "value6": {
                  "string": "None"
                },
                "selected": {
                  "int32": 6
                },
                "count": {
                  "int32": 7
                },
                "value5": {
                  "string": "Technical"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Unknown"
                },
                "value1": {
                  "string": "Extermination"
                },
                "value2": {
                  "string": "Base"
                },
                "value3": {
                  "string": "Timeout"
                },
                "value4": {
                  "string": "Failure"
                }
              }
            },
            "Force result": {
              "keyedArchive": {
                "selected": {
                  "int32": 3
                },
                "count": {
                  "int32": 4
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Win"
                },
                "value1": {
                  "string": "Lose"
                },
                "value2": {
                  "string": "Tie"
                },
                "value3": {
                  "string": "None"
                }
              }
            },
            "Show fakeReactions button": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Fake SmartDLC PackManager": {
          "keyedArchive": {
            "Emulate packs already downloaded": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Emulate unstable network": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Seconds to download fake pack": {
              "keyedArchive": {
                "max": {
                  "float": 360
                },
                "min": {
                  "float": 0.001
                },
                "value": {
                  "float": 120
                }
              }
            },
            "Enable fake network connection": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            }
          }
        },
        "Battle ribbons": {
          "keyedArchive": {
            "Ribbon value anim length": {
              "keyedArchive": {
                "value": {
                  "float": 0.3
                }
              }
            },
            "Battle ribbons style": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            },
            "Queued ribbon show time": {
              "keyedArchive": {
                "value": {
                  "float": 2
                }
              }
            },
            "Ribbon scale scatter": {
              "keyedArchive": {
                "value": {
                  "float": 0.6
                }
              }
            },
            "Ribbon appear/disappear time": {
              "keyedArchive": {
                "value": {
                  "float": 0.25
                }
              }
            },
            "Ribbon scale enabled": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Ribbon show time": {
              "keyedArchive": {
                "value": {
                  "float": 2.6
                }
              }
            },
            "Ribbon value scale scatter": {
              "keyedArchive": {
                "value": {
                  "float": 0.6
                }
              }
            },
            "Updated ribbon show time": {
              "keyedArchive": {
                "value": {
                  "float": 2
                }
              }
            }
          }
        },
        "Huge file I/O": {
          "keyedArchive": {
            "File size, KiB": {
              "keyedArchive": {
                "value": {
                  "float": 3072
                }
              }
            },
            "Reads and writes count": {
              "keyedArchive": {
                "value": {
                  "float": 100
                }
              }
            }
          }
        },
        "Hidden": {
          "keyedArchive": {
            "Team killer marker color": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "Color": [
                    0,
                    1,
                    1,
                    1
                  ]
                }
              }
            },
            "Enemy marker color": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "Color": [
                    1,
                    0.1216,
                    0.1176,
                    1
                  ]
                }
              }
            },
            "Dead team killer marker color": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "Color": [
                    0,
                    0.3922,
                    0.3922,
                    1
                  ]
                }
              }
            },
            "Dead enemy marker color": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "Color": [
                    0.4118,
                    0,
                    0,
                    1
                  ]
                }
              }
            },
            "Friend marker color": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "Color": [
                    0.5255,
                    0.851,
                    0.0902,
                    1
                  ]
                }
              }
            },
            "Dead friend marker color": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "Color": [
                    0.1961,
                    0.3451,
                    0,
                    1
                  ]
                }
              }
            },
            "SelectedMap": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "string": "Random"
                }
              }
            }
          }
        },
        "Bullet": {
          "keyedArchive": {
            "Debug draw": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 5
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "None"
                },
                "value1": {
                  "string": "Raycast"
                },
                "value2": {
                  "string": "Tanks"
                },
                "value3": {
                  "string": "AllExceptLandscape"
                },
                "value4": {
                  "string": "All"
                }
              }
            },
            "Trigger debug draw": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Hangar": {
          "keyedArchive": {
            "Loading delay for scene ms": {
              "keyedArchive": {
                "max": {
                  "float": 60000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Override Premium Hangar": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            },
            "Override Default Hangar": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            },
            "Loading delay for tank ms": {
              "keyedArchive": {
                "max": {
                  "float": 60000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Override Platoon Hangar": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            },
            "Notification animation time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Notification wait time": {
              "keyedArchive": {
                "max": {
                  "float": 60
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 3.5
                }
              }
            }
          }
        },
        "Camera": {
          "keyedArchive": {
            "Integrate Camera": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Far plane distance": {
              "keyedArchive": {
                "max": {
                  "float": 5000
                },
                "min": {
                  "float": 100
                },
                "value": {
                  "float": 5000
                }
              }
            },
            "Angular Speed modifier": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 9
                }
              }
            },
            "Angular Speed modifier Precise": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 30
                }
              }
            },
            "Camera base sensitivity": {
              "keyedArchive": {
                "max": {
                  "float": 1.5
                },
                "min": {
                  "float": 0.5
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Precise camera max pitch limit (degr)": {
              "keyedArchive": {
                "max": {
                  "float": 89
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 50
                }
              }
            },
            "Instant Move": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Precise camera min pitch limit (degr)": {
              "keyedArchive": {
                "max": {
                  "float": 0
                },
                "min": {
                  "float": -89
                },
                "value": {
                  "float": -30
                }
              }
            }
          }
        },
        "Camera lock": {
          "keyedArchive": {
            "Fov Driving Angle X (degr)": {
              "keyedArchive": {
                "max": {
                  "float": 60
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Camera FOV mult": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1.6
                }
              }
            },
            "Camera Target Angle Stand(degr)": {
              "keyedArchive": {
                "max": {
                  "float": 180
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Fov Target Angle (degr)": {
              "keyedArchive": {
                "max": {
                  "float": 180
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 30
                }
              }
            }
          }
        },
        "Camera vibrations": {
          "keyedArchive": {
            "Amplitude, deg": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Fade time, sec": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Frequency X, Hz": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 10
                }
              }
            },
            "Frequency Y, Hz": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 11
                }
              }
            }
          }
        },
        "Capture Flag": {
          "keyedArchive": {
            "Enemy Base": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    0,
                    0,
                    1
                  ]
                }
              }
            },
            "Player Base": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0,
                    1,
                    0,
                    1
                  ]
                }
              }
            },
            "Neutral Base": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    1,
                    1,
                    1
                  ]
                }
              }
            }
          }
        },
        "View Scale": {
          "keyedArchive": {
            "3dView scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Whole scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Clans": {
          "keyedArchive": {
            "01. Invite lifetime(hours)": {
              "keyedArchive": {
                "max": {
                  "float": 720
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "int32": 120
                }
              }
            }
          }
        },
        "Code sleeps": {
          "keyedArchive": {
            "Place to sleep": {
              "keyedArchive": {
                "value6": {
                  "string": "ReplayRewindStart"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 9
                },
                "value5": {
                  "string": "LoadingShowBattleScreen"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "None"
                },
                "value1": {
                  "string": "ReplayStart"
                },
                "value2": {
                  "string": "LoadingShowBattleLoadingScreen"
                },
                "value3": {
                  "string": "LoadingStartLoadingThread"
                },
                "value4": {
                  "string": "LoadingInLoadingThread"
                },
                "value7": {
                  "string": "ReplayRewindBeforeReloadResources"
                },
                "value8": {
                  "string": "ReplayRewindAfterReloadResources"
                }
              }
            },
            "Sleep timeout": {
              "keyedArchive": {
                "value": {
                  "int32": 60000
                }
              }
            }
          }
        },
        "Colorblind mode": {
          "keyedArchive": {
            "Enable": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "First Abnormal Hue Fade Out": {
              "keyedArchive": {
                "max": {
                  "float": 0.2
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.02
                }
              }
            },
            "First Desired Hue Value": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.66
                }
              }
            },
            "First Abnormal Hue Value": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "First Abnormal Hue Padding": {
              "keyedArchive": {
                "max": {
                  "float": 0.2
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.03
                }
              }
            },
            "Second Abnormal Hue Fade Out": {
              "keyedArchive": {
                "max": {
                  "float": 0.2
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.02
                }
              }
            },
            "Second Abnormal Hue Value": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.09
                }
              }
            },
            "Second Abnormal Hue Padding": {
              "keyedArchive": {
                "max": {
                  "float": 0.2
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.03
                }
              }
            },
            "Second Desired Hue Value": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.55
                }
              }
            }
          }
        },
        "Hangar 3D": {
          "keyedArchive": {
            "acceleration": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 412
                }
              }
            },
            "idle animation time": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 5.37
                }
              }
            },
            "camo fov": {
              "keyedArchive": {
                "max": {
                  "float": 120
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 64
                }
              }
            },
            "camo pitch": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 20
                },
                "value": {
                  "float": 40
                }
              }
            },
            "showcase target x": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 0
                }
              }
            },
            "idle back animation time": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 10.66
                }
              }
            },
            "camo radius": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 9
                }
              }
            },
            "camo target y": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 0
                }
              }
            },
            "showcase radius": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 9
                }
              }
            },
            "camo yaw": {
              "keyedArchive": {
                "max": {
                  "float": 359
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 315
                }
              }
            },
            "showcase target y": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 0
                }
              }
            },
            "showcase pitch": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 20
                },
                "value": {
                  "float": 25
                }
              }
            },
            "camo target x": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 0
                }
              }
            },
            "idle back animation": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "gamepad velocity pitch coefficient": {
              "keyedArchive": {
                "value": {
                  "float": 16
                }
              }
            },
            "camo target z": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 1
                }
              }
            },
            "debug": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "default fov": {
              "keyedArchive": {
                "max": {
                  "float": 120
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 64
                }
              }
            },
            "default pitch": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": -10
                },
                "value": {
                  "float": 20.1
                }
              }
            },
            "default radius": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 12.09
                }
              }
            },
            "default target x": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 0
                }
              }
            },
            "default target y": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 0
                }
              }
            },
            "default target z": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 1.17
                }
              }
            },
            "default yaw": {
              "keyedArchive": {
                "max": {
                  "float": 359
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 320
                }
              }
            },
            "idle wait time": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1.2
                }
              }
            },
            "gamepad velocity yaw coefficient": {
              "keyedArchive": {
                "value": {
                  "float": 8
                }
              }
            },
            "horizontal to vertical radius coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.73
                }
              }
            },
            "idle animation angle": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 5.73
                }
              }
            },
            "idle back wait time": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 6.89
                }
              }
            },
            "max fov": {
              "keyedArchive": {
                "max": {
                  "float": 120
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 64
                }
              }
            },
            "max pitch": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": -10
                },
                "value": {
                  "float": 67.900002
                }
              }
            },
            "max pitch velocity": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 139
                }
              }
            },
            "max yaw velocity": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 217
                }
              }
            },
            "min fov": {
              "keyedArchive": {
                "max": {
                  "float": 120
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 30
                }
              }
            },
            "min pitch": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": -10
                },
                "value": {
                  "float": 5.86
                }
              }
            },
            "pinch to fov coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 0.1
                },
                "min": {
                  "float": 0.001
                },
                "value": {
                  "float": 0.1
                }
              }
            },
            "showcase target z": {
              "keyedArchive": {
                "max": {
                  "float": 40
                },
                "min": {
                  "float": -40
                },
                "value": {
                  "float": 1
                }
              }
            },
            "showcase fov": {
              "keyedArchive": {
                "max": {
                  "float": 120
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 64
                }
              }
            },
            "pinch to radius coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 0.1
                },
                "min": {
                  "float": 0.001
                },
                "value": {
                  "float": 0.024
                }
              }
            },
            "pixels to pitch coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.22
                }
              }
            },
            "pixels to yaw coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.46
                }
              }
            },
            "showcase yaw": {
              "keyedArchive": {
                "max": {
                  "float": 359
                },
                "min": {
                  "float": -359
                },
                "value": {
                  "float": -47.279999
                }
              }
            }
          }
        },
        "Damaged modules": {
          "keyedArchive": {
            "Animation frame time": {
              "keyedArchive": {
                "max": {
                  "float": 6
                },
                "min": {
                  "float": 0.5
                },
                "value": {
                  "float": 1.2
                }
              }
            },
            "Color of critical notification": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    0.5,
                    0.25,
                    1
                  ]
                }
              }
            },
            "Count of texts notifications": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "int32": 3
                }
              }
            },
            "Bottom HUD anim time": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Animation min alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Color of info notification": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0.5,
                    1,
                    0.5,
                    1
                  ]
                }
              }
            },
            "Animation frames count": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 3
                }
              }
            },
            "Color of warning notification": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    0.5,
                    0.25,
                    1
                  ]
                }
              }
            },
            "One message for all recover notification": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Text message hide time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Text message wait time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 4
                }
              }
            }
          }
        },
        "Debug and profiler": {
          "keyedArchive": {
            "LOADING TIME Profiling (LTP): Enable": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Enable debug automation": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "FRAME TIME Profiling (FTP): Enable": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "FTP: Long Frame Threshold": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 40
                }
              }
            },
            "Show profiler overlay button": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "FTP: Dump Level": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 4
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "None"
                },
                "value1": {
                  "string": ">90ms"
                },
                "value2": {
                  "string": ">50ms"
                },
                "value3": {
                  "string": "All"
                }
              }
            },
            "FTP: Num Counters": {
              "keyedArchive": {
                "value6": {
                  "string": "131072"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 8
                },
                "value5": {
                  "string": "65536"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "2048"
                },
                "value1": {
                  "string": "4096"
                },
                "value2": {
                  "string": "8192"
                },
                "value3": {
                  "string": "16384"
                },
                "value4": {
                  "string": "32768"
                },
                "value7": {
                  "string": "262144"
                }
              }
            },
            "FTP: Record Longest Frame": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug UI button": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "FTP: Num Obj Snapshots": {
              "keyedArchive": {
                "value6": {
                  "string": "1024"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 10
                },
                "value5": {
                  "string": "512"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "16"
                },
                "value1": {
                  "string": "32"
                },
                "value2": {
                  "string": "64"
                },
                "value3": {
                  "string": "128"
                },
                "value4": {
                  "string": "256"
                },
                "value7": {
                  "string": "2048"
                },
                "value8": {
                  "string": "4096"
                },
                "value9": {
                  "string": "8192"
                }
              }
            },
            "LTP: Num Counters": {
              "keyedArchive": {
                "value6": {
                  "string": "131072"
                },
                "selected": {
                  "int32": 7
                },
                "count": {
                  "int32": 11
                },
                "value5": {
                  "string": "65536"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "2048"
                },
                "value1": {
                  "string": "4096"
                },
                "value3": {
                  "string": "16384"
                },
                "value10": {
                  "string": "2097152"
                },
                "value2": {
                  "string": "8192"
                },
                "value4": {
                  "string": "32768"
                },
                "value7": {
                  "string": "262144"
                },
                "value8": {
                  "string": "524288"
                },
                "value9": {
                  "string": "1048576"
                }
              }
            },
            "Show number of controls on screen": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "LTP: Num Obj Snapshots": {
              "keyedArchive": {
                "value6": {
                  "string": "1024"
                },
                "selected": {
                  "int32": 2
                },
                "count": {
                  "int32": 11
                },
                "value5": {
                  "string": "512"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "16"
                },
                "value1": {
                  "string": "32"
                },
                "value3": {
                  "string": "128"
                },
                "value10": {
                  "string": "16384"
                },
                "value2": {
                  "string": "64"
                },
                "value4": {
                  "string": "256"
                },
                "value7": {
                  "string": "2048"
                },
                "value8": {
                  "string": "4096"
                },
                "value9": {
                  "string": "8192"
                }
              }
            },
            "Lobby fps limit enabled": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Progress bar on battle loading": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show FPS": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show camera rotation": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show debug popup": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show dev console button": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Show memory usage": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show reload button": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show restore health button": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show switch armor state button": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Use runtime graphics switch": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Demo": {
          "keyedArchive": {
            "01. Min battles before dialog display": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 100
                }
              }
            },
            "02. Battles between dialog display": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 40
                }
              }
            },
            "03. Hours between dialog display": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 24
                }
              }
            }
          }
        },
        "Dynamic Resources": {
          "keyedArchive": {
            "Dynamic Resources Version": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "Ignore Dynamic Version": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Direction arrow": {
          "keyedArchive": {
            "Adjust sniper arrows position": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Arrow curvature": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Arrow element count": {
              "keyedArchive": {
                "max": {
                  "float": 50
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "int32": 5
                }
              }
            },
            "Arrow element width": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.86
                }
              }
            },
            "Arrow length": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.86
                }
              }
            },
            "Backward arrow color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0.992,
                    0.914,
                    0.27,
                    1
                  ]
                }
              }
            },
            "Back offset": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": -5
                },
                "value": {
                  "float": -0.5
                }
              }
            },
            "Min control point distance": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.002
                }
              }
            },
            "Cant move color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    0.027,
                    0.027,
                    1
                  ]
                }
              }
            },
            "Clamp rotation to angle": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 34
                }
              }
            },
            "Control point offset (curve)": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.6
                }
              }
            },
            "Control point offset (straight line)": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.6
                }
              }
            },
            "Curving animation time": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Turn arrow color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0.463,
                    0.827,
                    0.157,
                    1
                  ]
                }
              }
            },
            "Forward arrow color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0.463,
                    0.827,
                    0.157,
                    1
                  ]
                }
              }
            },
            "Front offset": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": -5
                },
                "value": {
                  "float": -0.15
                }
              }
            },
            "Max control point distance": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.77
                }
              }
            },
            "Show in sniper": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Side arrows curvature": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.7
                }
              }
            },
            "Sniper arrow max position adjustment": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            }
          }
        },
        "Effects params": {
          "keyedArchive": {
            "Fire and smoke delay": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.6
                }
              }
            }
          }
        },
        "Environment Hit decals": {
          "keyedArchive": {
            "Draw hit normal": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Draw Intersection triangles": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Draw bbox": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Draw hit position": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Equipment control": {
          "keyedArchive": {
            "Enlarge scale factor": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 1.25
                }
              }
            },
            "Pulsation frequency": {
              "keyedArchive": {
                "max": {
                  "float": 20
                },
                "min": {
                  "float": 0.5
                },
                "value": {
                  "float": 6
                }
              }
            }
          }
        },
        "Facebook": {
          "keyedArchive": {
            "Allow sending firstTanker": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "firstTanker has been sent": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Filter": {
          "keyedArchive": {
            "reset all if all selected": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Free camera sensitivity": {
          "keyedArchive": {
            "1) Vertical": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.2
                },
                "value": {
                  "float": 1
                }
              }
            },
            "2) Horizontal": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0.2
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Graphics options ui params": {
          "keyedArchive": {
            "Force show migrated dialog": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Gun marks": {
          "keyedArchive": {
            "Enable for all tanks": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Marks count": {
              "keyedArchive": {
                "value": {
                  "int32": 3
                }
              }
            },
            "Extension amount": {
              "keyedArchive": {
                "value": {
                  "float": 0.001
                }
              }
            }
          }
        },
        "Image Cache": {
          "keyedArchive": {
            "Always check e-tag": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Image cache enabled": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            }
          }
        },
        "Joypad": {
          "keyedArchive": {
            "Cruise": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Joypad camera": {
          "keyedArchive": {
            "Display Zones": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Forward width": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.35
                }
              }
            },
            "Dead zone percent": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.17
                }
              }
            },
            "Max sensitivity scale": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.825
                }
              }
            },
            "Full Throttle": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Soft pure turn activation": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Floating activation offset x": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Floating activation offset y": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Min sensitivity scale": {
              "keyedArchive": {
                "max": {
                  "float": 4
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1.05
                }
              }
            },
            "Sensitivity affects dead zone": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Sensitivity affects side": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Side additional angle": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 20
                }
              }
            },
            "Side bottom": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": -0.5
                },
                "value": {
                  "float": -0.077
                }
              }
            },
            "Side top": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": -0.5
                },
                "value": {
                  "float": 0.1
                }
              }
            },
            "Sniper forward width": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Turn range": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Joypad dissected": {
          "keyedArchive": {
            "Sector9 degr": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 40
                }
              }
            },
            "Sector1 degr": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 40
                }
              }
            },
            "Sector5_13 degr": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 30
                }
              }
            },
            "Turn range": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.01
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Learning lesson": {
          "keyedArchive": {
            "Mark all lessons as completed": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Login Screen": {
          "keyedArchive": {
            "Force Conflict Credentials": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force No Realm": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Demo captcha WGNR error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Demo captcha download error": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Emulate Game Center timeout": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Disable auto-login": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Fail Pow By Timeout": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "External login error reason": {
              "keyedArchive": {
                "value6": {
                  "string": "Apple - failed to login"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 8
                },
                "value5": {
                  "string": "Live - invalid token"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "None"
                },
                "value1": {
                  "string": "Game Center"
                },
                "value2": {
                  "string": "Google - data fetch failed"
                },
                "value3": {
                  "string": "Google - invalid token"
                },
                "value4": {
                  "string": "Live - no token"
                }
              }
            },
            "Game Center timeout": {
              "keyedArchive": {
                "max": {
                  "float": 300
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 60
                }
              }
            },
            "External registration error reason": {
              "keyedArchive": {
                "value6": {
                  "string": "Apple - fail to register"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 8
                },
                "value5": {
                  "string": "Live - invalid token"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "None"
                },
                "value1": {
                  "string": "Service not available"
                },
                "value2": {
                  "string": "Email not available"
                },
                "value3": {
                  "string": "Timeout"
                },
                "value4": {
                  "string": "Live - no token"
                },
                "value7": {
                  "string": "No token"
                }
              }
            },
            "Regions yaml custom path": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            },
            "Force Persona Conflicted": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force trace route for all urls": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force WGNI V3": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force legacy basic login": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force pass no game realm": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Regions yaml state": {
              "keyedArchive": {
                "value": {
                  "int32": 0
                }
              }
            },
            "Remember region": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Use fallback for update client error dialog": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Use new login flow": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            }
          }
        },
        "Magnet": {
          "keyedArchive": {
            "Debug draw": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Attract back scales as Friction field": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "bool": true
                }
              }
            },
            "Choose by slide dir when overlap": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Attraction rule": {
              "keyedArchive": {
                "selected": {
                  "int32": 1
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "a = const"
                },
                "value1": {
                  "string": "a ~ r"
                },
                "value2": {
                  "string": "a ~ r^2"
                }
              }
            },
            "Change slide direction": {
              "keyedArchive": {
                "hidden": {
                  "bool": true
                },
                "value": {
                  "bool": true
                }
              }
            },
            "Field radius (of screen width)": {
              "keyedArchive": {
                "max": {
                  "float": 0.3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.03
                }
              }
            },
            "Force ratio": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 300
                }
              }
            },
            "Force activation limit": {
              "keyedArchive": {
                "max": {
                  "float": 0.005
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.0002
                }
              }
            },
            "Friction field min size": {
              "keyedArchive": {
                "max": {
                  "float": 0.3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.04
                }
              }
            },
            "Friction field percent of BBox": {
              "keyedArchive": {
                "max": {
                  "float": 200
                },
                "min": {
                  "float": 50
                },
                "value": {
                  "int32": 100
                }
              }
            },
            "Friction field size when a=0": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Friction field size when sense=1": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.3
                }
              }
            },
            "Friction sense percent": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 20
                }
              }
            }
          }
        },
        "Markers on terrain": {
          "keyedArchive": {
            "Markers on terrain ally freezing time of command": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 2
                }
              }
            },
            "Markers on terrain max distance ray visibility": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 250
                }
              }
            },
            "Markers on terrain enemy freezing time of command": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.8
                }
              }
            },
            "Markers on terrain min distance visibility": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 5
                }
              }
            },
            "Markers on terrain marker life time": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 15
                }
              }
            },
            "Markers on terrain min distance ray visibility": {
              "keyedArchive": {
                "max": {
                  "float": 200
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 100
                }
              }
            },
            "Markers on terrain markers count": {
              "keyedArchive": {
                "max": {
                  "float": 60
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "int32": 14
                }
              }
            },
            "Markers on terrain max ray length": {
              "keyedArchive": {
                "max": {
                  "float": 350
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 80
                }
              }
            },
            "Markers on terrain min lifetime at min distance": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 3
                }
              }
            },
            "Markers on terrain min ray length": {
              "keyedArchive": {
                "max": {
                  "float": 200
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 40
                }
              }
            }
          }
        },
        "Markers terrain outside viewport": {
          "keyedArchive": {
            "Marker min scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.7
                }
              }
            },
            "Maximum show distance, m": {
              "keyedArchive": {
                "max": {
                  "float": 600
                },
                "min": {
                  "float": 100
                },
                "value": {
                  "float": 300
                }
              }
            },
            "Screen show radius Sniper, pixels": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 170
                }
              }
            },
            "Screen show radius, pixels": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 120
                }
              }
            }
          }
        },
        "Status effects panel": {
          "keyedArchive": {
            "Minimal show time": {
              "keyedArchive": {
                "value": {
                  "float": 2
                }
              }
            },
            "Trigger skill show time": {
              "keyedArchive": {
                "value": {
                  "float": 3
                }
              }
            }
          }
        },
        "Mouse Sensitivity": {
          "keyedArchive": {
            "6) Sensitivity accel mod (free cam)": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "1) Sensitivity base": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 3
                }
              }
            },
            "3) Sensitivity base (sniper)": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 3
                }
              }
            },
            "2) Sensitivity accel mod": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "4) Sensitivity accel mod (sniper)": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "5) Sensitivity analog joystick": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 5
                }
              }
            },
            "5) Sensitivity base (free cam)": {
              "keyedArchive": {
                "max": {
                  "float": 20
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 3
                }
              }
            }
          }
        },
        "News": {
          "keyedArchive": {
            "Apply news from other server": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Apply full path": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Custom region for news": {
              "keyedArchive": {
                "value6": {
                  "string": "Wgs12"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 14
                },
                "value5": {
                  "string": "Wgt1"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Wgt13"
                },
                "value9": {
                  "string": "North America"
                },
                "value12": {
                  "string": "TrunkQA_Ext"
                },
                "value1": {
                  "string": "Wgs100"
                },
                "value10": {
                  "string": "CN1"
                },
                "value11": {
                  "string": "CNGV"
                },
                "value8": {
                  "string": "Wgt12"
                },
                "value13": {
                  "string": "RuBy"
                },
                "value2": {
                  "string": "Wgs1"
                },
                "value3": {
                  "string": "Wgs13"
                },
                "value4": {
                  "string": "Wgs11"
                },
                "value7": {
                  "string": "Cnwotb"
                }
              }
            },
            "Custom country": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            },
            "Custom platform": {
              "keyedArchive": {
                "value6": {
                  "string": "wgc"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 7
                },
                "value5": {
                  "string": "lgc"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "android"
                },
                "value1": {
                  "string": "ios"
                },
                "value2": {
                  "string": "win10"
                },
                "value3": {
                  "string": "steam"
                },
                "value4": {
                  "string": "switch"
                }
              }
            },
            "Full news path": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            }
          }
        },
        "Replays": {
          "keyedArchive": {
            "Ignore Invalid Replay Digest": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Customization always visible": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Dev Cinema Camera": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Lag Compensation On": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            }
          }
        },
        "Numbered skins": {
          "keyedArchive": {
            "Z-fighting prevention min distance to camera": {
              "keyedArchive": {
                "value": {
                  "float": 5
                }
              }
            },
            "Preview skin string": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            },
            "Z-fighting prevention max shift distance": {
              "keyedArchive": {
                "value": {
                  "float": 0.01
                }
              }
            },
            "Z-fighting prevention max distance to camera": {
              "keyedArchive": {
                "value": {
                  "float": 25
                }
              }
            }
          }
        },
        "Numeric Spinner": {
          "keyedArchive": {
            "First press timeout": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Button highlight defined by": {
              "keyedArchive": {
                "selected": {
                  "int32": 1
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Press moment"
                },
                "value1": {
                  "string": "Last move"
                },
                "value2": {
                  "string": "Side"
                }
              }
            },
            "Multiplier time threshold": {
              "keyedArchive": {
                "max": {
                  "float": 300
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 2.5
                }
              }
            },
            "Drag threshold": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 5
                }
              }
            },
            "Multiplier threshold": {
              "keyedArchive": {
                "max": {
                  "float": 300
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 100
                }
              }
            },
            "Repeated press timeout": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.25
                }
              }
            }
          }
        },
        "Observer View Scale Factor": {
          "keyedArchive": {
            "Both team observer scale factor": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.8
                }
              }
            },
            "Lock observer": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "One team observer scale factor": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.6
                }
              }
            },
            "Realistic mode undetected marker opacity": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            }
          }
        },
        "Squad 3D": {
          "keyedArchive": {
            "camo fov": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "camo pitch": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "showcase target x": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "camo radius": {
              "keyedArchive": {
                "value": {
                  "float": 10
                }
              }
            },
            "camo target y": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "camo target x": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "showcase pitch": {
              "keyedArchive": {
                "value": {
                  "float": 10
                }
              }
            },
            "showcase target y": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "camo yaw": {
              "keyedArchive": {
                "value": {
                  "float": 160
                }
              }
            },
            "showcase radius": {
              "keyedArchive": {
                "value": {
                  "float": 13
                }
              }
            },
            "camo target z": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "default fov": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "default pitch": {
              "keyedArchive": {
                "value": {
                  "float": 10
                }
              }
            },
            "default radius": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "default target x": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "default target y": {
              "keyedArchive": {
                "value": {
                  "float": 3.5
                }
              }
            },
            "limited rotation pitch max": {
              "keyedArchive": {
                "value": {
                  "float": 40
                }
              }
            },
            "default target z": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "default yaw": {
              "keyedArchive": {
                "value": {
                  "float": 155
                }
              }
            },
            "limited rotation fov max": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "limited rotation fov min": {
              "keyedArchive": {
                "value": {
                  "float": 30
                }
              }
            },
            "limited rotation pitch min": {
              "keyedArchive": {
                "value": {
                  "float": -3
                }
              }
            },
            "limited rotation yaw max": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "limited rotation yaw min": {
              "keyedArchive": {
                "value": {
                  "float": -20
                }
              }
            },
            "showcase target z": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "showcase fov": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "showcase yaw": {
              "keyedArchive": {
                "value": {
                  "float": 160
                }
              }
            }
          }
        },
        "Popup news": {
          "keyedArchive": {
            "Apply full popup news path": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Apply popup news from other servers": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Custom region for popup news": {
              "keyedArchive": {
                "value6": {
                  "string": "Wgs12"
                },
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 14
                },
                "value5": {
                  "string": "Wgt1"
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Wgt13"
                },
                "value9": {
                  "string": "North America"
                },
                "value12": {
                  "string": "TrunkQA_Ext"
                },
                "value1": {
                  "string": "Wgs100"
                },
                "value10": {
                  "string": "CN1"
                },
                "value11": {
                  "string": "CNGV"
                },
                "value8": {
                  "string": "Wgt12"
                },
                "value13": {
                  "string": "RuBy"
                },
                "value2": {
                  "string": "Wgs1"
                },
                "value3": {
                  "string": "Wgs13"
                },
                "value4": {
                  "string": "Wgs11"
                },
                "value7": {
                  "string": "Cnwotb"
                }
              }
            },
            "Full popup news path": {
              "keyedArchive": {
                "type": {
                  "string": "textField"
                },
                "value": {
                  "string": ""
                }
              }
            }
          }
        },
        "Stuff": {
          "keyedArchive": {
            "Atgm marker max distance": {
              "keyedArchive": {
                "value": {
                  "float": 200
                }
              }
            },
            "Atgm marker max scale": {
              "keyedArchive": {
                "value": {
                  "float": 0.8
                }
              }
            },
            "Can app std exception crash": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Atgm marker min distance": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "Atgm marker min scale": {
              "keyedArchive": {
                "value": {
                  "float": 0.5
                }
              }
            },
            "Can app DAVA exception crash": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Min caliber scale": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "Debug aim": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Can app crash": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Max tracer scale": {
              "keyedArchive": {
                "value": {
                  "float": 25
                }
              }
            },
            "Debug fog": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "WelcomeScreen Re Show Delay": {
              "keyedArchive": {
                "value": {
                  "int32": 3600
                }
              }
            },
            "Disk operations": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 2
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Erase"
                },
                "value1": {
                  "string": "Fill"
                }
              }
            },
            "Emulate JNI crash": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Emulate missed pack": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Never"
                },
                "value1": {
                  "string": "Map pack"
                },
                "value2": {
                  "string": "Vehicle pack"
                }
              }
            },
            "Emulate out of memory": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 5
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Never"
                },
                "value1": {
                  "string": "Hangar scene"
                },
                "value2": {
                  "string": "Hangar tank"
                },
                "value3": {
                  "string": "Battle scene"
                },
                "value4": {
                  "string": "Battle tank"
                }
              }
            },
            "Max caliber scale": {
              "keyedArchive": {
                "value": {
                  "float": 4.5
                }
              }
            },
            "Memory crash": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show Assert": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Min tracer scale": {
              "keyedArchive": {
                "value": {
                  "float": 15
                }
              }
            },
            "Network Logging": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Tracer ally color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0,
                    0.094,
                    0.533,
                    0.658
                  ]
                }
              }
            },
            "Tracer enemy color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    0.533,
                    0,
                    0,
                    0.658
                  ]
                }
              }
            },
            "Write Replay": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            }
          }
        },
        "Postmortem animation": {
          "keyedArchive": {
            "Camera to killer in const time": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Animate from sniper": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Tracer median alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Copy tracer color from original tracer": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Camera angle threshold": {
              "keyedArchive": {
                "max": {
                  "float": 90
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 8
                }
              }
            },
            "Camera to killer speed": {
              "keyedArchive": {
                "max": {
                  "float": 1000
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 150
                }
              }
            },
            "Camera ignore input time": {
              "keyedArchive": {
                "max": {
                  "float": 15
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 2.5
                }
              }
            },
            "Killer tracer length from invisible enemy": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 200
                }
              }
            },
            "Tracer start alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "Killer tracer color": {
              "keyedArchive": {
                "value": {
                  "Color": [
                    1,
                    1,
                    1,
                    1
                  ]
                }
              }
            },
            "Tracer end alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Tracer median": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.3
                }
              }
            },
            "Vertical camera offset": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1.5
                }
              }
            },
            "Visible tracer part from visible enemy": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            }
          }
        },
        "Region Settings": {
          "keyedArchive": {
            "AOGAS": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "AOGASTime": {
              "keyedArchive": {
                "value": {
                  "float": 8
                }
              }
            },
            "Use RUBY server selection flow": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "User home country code": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            },
            "User realm": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            }
          }
        },
        "Registration flow": {
          "keyedArchive": {
            "Force /v3/settings/ timeout": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Detected user country": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            },
            "EU Minors": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 3
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Default"
                },
                "value1": {
                  "string": "On"
                },
                "value2": {
                  "string": "Off"
                }
              }
            },
            "Force adult status": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Server Log": {
          "keyedArchive": {
            "Account Data": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Server Config": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Shop": {
          "keyedArchive": {
            "Shop badges cache validity period": {
              "keyedArchive": {
                "value": {
                  "int32": 604800
                }
              }
            },
            "Force invalid primary GGM urls": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Shop list logging": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Country code": {
              "keyedArchive": {
                "value": {
                  "string": ""
                }
              }
            },
            "Disable steam shop requests": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force invalid GGM purchase request": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Force is_final = false": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Purchase monitor logging": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Shop badges cache logging": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Shop badges count update period": {
              "keyedArchive": {
                "value": {
                  "int32": 21600
                }
              }
            }
          }
        },
        "Silhouette": {
          "keyedArchive": {
            "Silhouette Width": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Silhouette exponent": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 0.8
                }
              }
            }
          }
        },
        "Smart zoom": {
          "keyedArchive": {
            "2) Always fit enemy tank to screen": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Movement FOV offset (deg)": {
              "keyedArchive": {
                "max": {
                  "float": 30
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "9) Overzoom effect": {
              "keyedArchive": {
                "max": {
                  "float": 0.5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0
                }
              }
            },
            "1) Preserve average velocity": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "3) Zoom back if enemy out of screen": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "6) Damped string": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Obstacle width multiplier": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            },
            "7) Pause even during movement": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Movement FOV multiplier": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Obstacle zoom back pause": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 2.5
                }
              }
            },
            "Viewport for fit enemy to screen": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.3
                },
                "value": {
                  "float": 0.8
                }
              }
            },
            "Viewport for out of screen check": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.3
                },
                "value": {
                  "float": 0.9
                }
              }
            },
            "Zoom target pause": {
              "keyedArchive": {
                "max": {
                  "float": 3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "Zoom back intensity check period": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Viewport to fit centered enemy": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.3
                },
                "value": {
                  "float": 0.4
                }
              }
            },
            "Zoom activation radius": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 4.3
                }
              }
            },
            "Zoom back angle cos": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.85
                }
              }
            },
            "Zoom back policy": {
              "keyedArchive": {
                "selected": {
                  "int32": 4
                },
                "count": {
                  "int32": 5
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Timeout only"
                },
                "value1": {
                  "string": "Angle"
                },
                "value2": {
                  "string": "Slide"
                },
                "value3": {
                  "string": "Continuous slide"
                },
                "value4": {
                  "string": "Slide intensity"
                }
              }
            },
            "Zoom back gamepad slide length": {
              "keyedArchive": {
                "max": {
                  "float": 150
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 15
                }
              }
            },
            "Zoom back gyro modifier": {
              "keyedArchive": {
                "max": {
                  "float": 25
                },
                "min": {
                  "float": 0.5
                },
                "value": {
                  "float": 10
                }
              }
            },
            "Zoom back pause": {
              "keyedArchive": {
                "max": {
                  "float": 20
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 10
                }
              }
            },
            "Zoom back slide length": {
              "keyedArchive": {
                "max": {
                  "float": 150
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 50
                }
              }
            },
            "Zoom back timeout enabled": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "SmartDLC": {
          "keyedArchive": {
            "Emu UI Mode": {
              "keyedArchive": {
                "selected": {
                  "int32": 0
                },
                "count": {
                  "int32": 2
                },
                "type": {
                  "string": "combo"
                },
                "value0": {
                  "string": "Web"
                },
                "value1": {
                  "string": "ImGui"
                }
              }
            },
            "Enable dlc 2_0 (restart needed)": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Enable download": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Sniper Mode Tank Indicator": {
          "keyedArchive": {
            "Pitch angle": {
              "keyedArchive": {
                "max": {
                  "float": 80
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 30
                }
              }
            },
            "Base scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 1
                }
              }
            }
          }
        },
        "Squad For 3 3D": {
          "keyedArchive": {
            "camo fov": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "camo pitch": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "showcase target x": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "camo radius": {
              "keyedArchive": {
                "value": {
                  "float": 10
                }
              }
            },
            "camo target y": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "camo target x": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "showcase pitch": {
              "keyedArchive": {
                "value": {
                  "float": 10
                }
              }
            },
            "showcase target y": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "camo yaw": {
              "keyedArchive": {
                "value": {
                  "float": 160
                }
              }
            },
            "showcase radius": {
              "keyedArchive": {
                "value": {
                  "float": 13
                }
              }
            },
            "camo target z": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "default fov": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "default pitch": {
              "keyedArchive": {
                "value": {
                  "float": 10
                }
              }
            },
            "default radius": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "default target x": {
              "keyedArchive": {
                "value": {
                  "float": 0
                }
              }
            },
            "default target y": {
              "keyedArchive": {
                "value": {
                  "float": 1
                }
              }
            },
            "limited rotation pitch max": {
              "keyedArchive": {
                "value": {
                  "float": 40
                }
              }
            },
            "default target z": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "default yaw": {
              "keyedArchive": {
                "value": {
                  "float": 150
                }
              }
            },
            "limited rotation fov max": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "limited rotation fov min": {
              "keyedArchive": {
                "value": {
                  "float": 30
                }
              }
            },
            "limited rotation pitch min": {
              "keyedArchive": {
                "value": {
                  "float": -3
                }
              }
            },
            "limited rotation yaw max": {
              "keyedArchive": {
                "value": {
                  "float": 20
                }
              }
            },
            "limited rotation yaw min": {
              "keyedArchive": {
                "value": {
                  "float": -20
                }
              }
            },
            "showcase target z": {
              "keyedArchive": {
                "value": {
                  "float": 1.5
                }
              }
            },
            "showcase fov": {
              "keyedArchive": {
                "value": {
                  "float": 60
                }
              }
            },
            "showcase yaw": {
              "keyedArchive": {
                "value": {
                  "float": 160
                }
              }
            }
          }
        },
        "Squad Markers": {
          "keyedArchive": {
            "Enabled": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Screen show radius, pixels": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 156
                }
              }
            },
            "Hide on max distance reached": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Marker min alpha": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Marker min scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.5
                }
              }
            },
            "Maximum show distance, m": {
              "keyedArchive": {
                "max": {
                  "float": 600
                },
                "min": {
                  "float": 100
                },
                "value": {
                  "float": 300
                }
              }
            },
            "Screen show radius Sniper, pixels": {
              "keyedArchive": {
                "max": {
                  "float": 500
                },
                "min": {
                  "float": 10
                },
                "value": {
                  "float": 200
                }
              }
            }
          }
        },
        "Tank skeleton": {
          "keyedArchive": {
            "Show tank entity names": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show tank AABoxes": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show tank entity skeleton": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Show tank skeleton": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Treads": {
          "keyedArchive": {
            "Debug treads": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            },
            "Use pink if not defined texture": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Vegetation Bend": {
          "keyedArchive": {
            "Camera Width": {
              "keyedArchive": {
                "max": {
                  "float": 200
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 125
                }
              }
            },
            "Cone Pow": {
              "keyedArchive": {
                "max": {
                  "float": 2
                },
                "min": {
                  "float": 1
                },
                "value": {
                  "float": 1.4
                }
              }
            },
            "Move Back Sq": {
              "keyedArchive": {
                "max": {
                  "float": 100
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 20
                }
              }
            },
            "Min scale": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.25
                }
              }
            }
          }
        },
        "Videos Skipping": {
          "keyedArchive": {
            "Skip Battle Pass Featuring": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Water Deformation": {
          "keyedArchive": {
            "Water Deceleration": {
              "keyedArchive": {
                "max": {
                  "float": 20
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 10
                }
              }
            },
            "Water Depth Bound": {
              "keyedArchive": {
                "max": {
                  "float": 5
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 1
                }
              }
            },
            "Water Force Bound": {
              "keyedArchive": {
                "max": {
                  "float": 20
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 10
                }
              }
            }
          }
        },
        "Water Swing": {
          "keyedArchive": {
            "02. Max water rotation roll": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.2
                }
              }
            },
            "01. Falloff coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 10
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 3
                }
              }
            },
            "03. Movement swing coefficient": {
              "keyedArchive": {
                "max": {
                  "float": 1
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.7
                }
              }
            },
            "04. Swing amplitude": {
              "keyedArchive": {
                "max": {
                  "float": 0.3
                },
                "min": {
                  "float": 0
                },
                "value": {
                  "float": 0.07
                }
              }
            }
          }
        },
        "Weather": {
          "keyedArchive": {
            "Current weather": {
              "keyedArchive": {
                "value": {
                  "string": "Default"
                }
              }
            },
            "Load all weathers": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "Webp animation": {
          "keyedArchive": {
            "Internal decoder enabled": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        },
        "XChat": {
          "keyedArchive": {
            "Obscene lang. filter": {
              "keyedArchive": {
                "value": {
                  "bool": true
                }
              }
            },
            "Cooldown duration": {
              "keyedArchive": {
                "max": {
                  "float": 60
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 6
                }
              }
            },
            "Cooldown threshold": {
              "keyedArchive": {
                "max": {
                  "float": 60
                },
                "min": {
                  "float": 0.1
                },
                "value": {
                  "float": 3
                }
              }
            },
            "Log": {
              "keyedArchive": {
                "value": {
                  "bool": false
                }
              }
            }
          }
        }
      }
    }
  }

  public getSectionNames() {
    return Object.keys(this.getDefaultDevOptions()?.keyedArchive);
  }

  public getGroupNames(sectionName: string) {
    return Object.keys(this.getDefaultDevOptions()?.keyedArchive?.[sectionName]?.keyedArchive);
  }

  public getPropertiesNames(sectionName: string, groupName: string) {
    return Object.keys(this.getDefaultDevOptions()?.keyedArchive?.[sectionName]?.keyedArchive?.[groupName]?.keyedArchive);
  }

  public getPropertyType(sectionName: string, groupName: string, propertyName: string) {
    return Object.keys(this.getDefaultDevOptions()?.keyedArchive?.[sectionName]?.keyedArchive?.[groupName]?.keyedArchive?.[propertyName])[0];
  }

  public getPropertyValue(sectionName: string, groupName: string, propertyName: string) {
    return Object.values(this.getDefaultDevOptions()?.keyedArchive?.[sectionName]?.keyedArchive?.[groupName]?.keyedArchive?.[propertyName])[0];
  }

  public setPropertyValue(devOptions: any, sectionName: string, groupName: string, propertyName: string, value: any) {
    const property = devOptions?.keyedArchive?.[sectionName]?.keyedArchive?.[groupName]?.keyedArchive?.[propertyName];

    if (property) {
      const key = Object.keys(property)[0];
      property[key] = value;
    }
  }
}
