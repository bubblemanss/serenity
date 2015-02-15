using UnityEngine;
using System.Collections;

public class SwtichScene3 : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetButton ("right")) {
			audio.Stop();
			Application.LoadLevel("Night");
		} else if (Input.GetButton ("left")) {
			audio.Stop();
			Application.LoadLevel("Mountain");
		}
	}
}
