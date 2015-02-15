using UnityEngine;
using System.Collections;

public class SwitchScene4 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetButton ("right")) {
			audio.Stop();
			Application.LoadLevel("Winter");
		} else if (Input.GetButton ("left")) {
			audio.Stop();
			Application.LoadLevel("Forest");
		}
	}
}
