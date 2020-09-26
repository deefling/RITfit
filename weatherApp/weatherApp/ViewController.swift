//
//  ViewController.swift
//  weatherApp
//
//  Created by Alek Michelson on 9/26/20.
//  Copyright © 2020 Alek Michelson. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {
    var webView: WKWebView!
    
    override func loadView() {
        self.navigationController?.isNavigationBarHidden = true
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = URL(string: "http://solace.ist.rit.edu/~mas5627/WeatherApp/index")!
        webView.load(URLRequest(url: url))
        webView.allowsBackForwardNavigationGestures = true
    }


}

