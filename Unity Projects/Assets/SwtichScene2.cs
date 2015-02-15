using UnityEngine;
using System.Collections;

public class SwtichScene2 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetButton ("right")) {
			audio.Stop();
			Application.LoadLevel("Forest");
		} else if (Input.GetButton ("left")) {
			audio.Stop();
			Application.LoadLevel("Ocean");
		}
	}
}
